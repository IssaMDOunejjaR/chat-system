import { useEffect, useLayoutEffect, useRef } from 'react';
import { useUserContext } from '../../contexts/user';
import { useLoggedUserData } from '../../hooks/useLoggedUserData';
import { usePrivateMessages } from '../../hooks/usePrivateMessages';
import Loader from '../Loader/Loader';
import Message from '../Message/Message';
import NoData from '../NoData/NoData';
import { Content } from './styles';

export default function ChatContent() {
	const {
		state: { id },
	} = useUserContext();
	const { data: user } = useLoggedUserData();
	const {
		data: messages,
		isSuccess,
		isLoading,
	} = usePrivateMessages(user, user?.data.id, id);

	const contRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		contRef.current?.scrollIntoView();
	}, [id, isSuccess]);

	useEffect(() => {
		contRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [messages?.data]);

	if (isLoading) return <Loader />;

	return (
		<Content>
			{messages?.data.length > 0 ? (
				messages?.data.map((message: any) => (
					<Message
						key={message.id}
						ownMessage={message.senderId === user?.data.id}
						data={message}
					/>
				))
			) : (
				<NoData
					iconSize={100}
					textSize={30}
					text={`You dont have any messages yet !`}
				/>
			)}
			<div ref={contRef}></div>
		</Content>
	);
}
