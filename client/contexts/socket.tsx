import Cookies from 'js-cookie';
import { createContext, useContext, useEffect } from 'react';
import { useQueryClient } from 'react-query';
import io from 'socket.io-client';
import { useLoggedUserData } from '../hooks/useLoggedUserData';
import { updatePrivateMessages, updateUserInfo } from '../socket';

const token = Cookies.get('token');

const socket = io(`https://chat-server-personal.up.railway.app`, {
	query: { token },
});

const SocketContext = createContext(socket);

type Props = {
	children: React.ReactNode;
};

export const SocketProvider: React.FC<Props> = ({ children }) => {
	const { data: user } = useLoggedUserData();
	const queryClient = useQueryClient();

	useEffect(() => {
		socket.on('userConnected', (data: any) => {
			updateUserInfo(data, queryClient);
		});

		socket.on('newMessage', (data: any) => {
			updatePrivateMessages(data, user?.data.id, queryClient);
		});

		socket.on('userDisconnected', (data: any) => {
			updateUserInfo(data, queryClient);
		});

		return () => {
			socket.removeListener('userConnected', (data: any) => {
				updateUserInfo(data, queryClient);
			});

			socket.removeListener('newMessage', (data: any) => {
				updatePrivateMessages(data, user?.data.id, queryClient);
			});

			socket.removeListener('userDisconnected', (data: any) => {
				updateUserInfo(data, queryClient);
			});
		};
	}, [queryClient, user]);

	return (
		<SocketContext.Provider value={socket}>
			{children}
		</SocketContext.Provider>
	);
};

export const useSocket = () => {
	return useContext(SocketContext);
};
