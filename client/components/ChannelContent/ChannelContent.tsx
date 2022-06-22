import { useEffect, useLayoutEffect, useRef } from 'react';
import { useUserContext } from '../../contexts/user';
import { useChannelMessages } from '../../hooks/useChannelMessages';
import { useLoggedUserData } from '../../hooks/useLoggedUserData';
import Loader from '../Loader/Loader';
import Message from '../Message/Message';
import NoData from '../NoData/NoData';
import { Content } from './style';

export default function ChannelContent() {
	const {
		state: { id },
	} = useUserContext();
	const { data: user } = useLoggedUserData();
	const { data: messages, isLoading, isSuccess } = useChannelMessages(id);
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
				messages?.data.map(
					(message: any, index: number, arr: any[]) => (
						<Message
							key={message.id}
							ownMessage={message.userId === user?.data.id}
							sameUser={arr[index - 1]?.userId === message.userId}
							data={message}
						/>
					),
				)
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
