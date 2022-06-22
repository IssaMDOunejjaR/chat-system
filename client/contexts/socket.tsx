import Cookies from 'js-cookie';
import { createContext, useContext, useEffect } from 'react';
import { useQueryClient } from 'react-query';
import io from 'socket.io-client';
import { useLoggedUserData } from '../hooks/useLoggedUserData';
import { updatePrivateMessages, updateUserInfo } from '../socket';

const token = Cookies.get('token');

const socket = io(`http://localhost:9000`, { query: { token } });

const SocketContext = createContext(socket);

export const SocketProvider = ({
	children,
}: {
	children: JSX.Element | JSX.Element[] | string;
}) => {
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
