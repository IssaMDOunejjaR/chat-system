import { Container, Content } from './style';
import NoData from '../NoData/NoData';
import ChatHeader from '../ChatHeader/ChatHeader';
import ChatContent from '../ChatContent/ChatContent';
import ChatForm from '../ChatForm/ChatForm';
import { useUserContext } from '../../contexts/user';
import ChannelContent from '../ChannelContent/ChannelContent';
import ChannelHeader from '../ChannelHeader/ChannelHeader';

export default function Chat() {
	const {
		state: { id, chatType },
	} = useUserContext();

	return (
		<Container
			key="chat"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			{id ? (
				<>
					{chatType === 0 ? <ChatHeader /> : <ChannelHeader />}
					{chatType === 0 ? <ChatContent /> : <ChannelContent />}
					<ChatForm />
				</>
			) : (
				<Content>
					<NoData
						iconSize={100}
						textSize={30}
						text={`Select a ${
							chatType === 0 ? 'friend' : 'channel'
						} to start a conversation`}
					/>
				</Content>
			)}
		</Container>
	);
}
