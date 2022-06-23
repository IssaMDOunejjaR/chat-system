import {
	Container,
	OwnContainer,
	Picture,
	Content,
	OwnContent,
	DisplayName,
	OwnDisplayName,
	MessageContent,
	OwnMessage,
} from './style';
import moment from 'moment';
import { useUserContext } from '../../contexts/user';
import { MessageData } from '../../types/message';

export default function Message({
	ownMessage,
	data,
	sameUser = false,
}: {
	ownMessage: boolean;
	data: MessageData;
	sameUser?: boolean;
}) {
	const {
		state: { chatType },
	} = useUserContext();
	const { message, time } = data;
	const MessageText = ownMessage ? OwnMessage : MessageContent;
	const Wrapper = ownMessage ? OwnContainer : Container;
	const ContentBox = ownMessage ? OwnContent : Content;
	const DisplayNameContent = ownMessage ? OwnDisplayName : DisplayName;

	return (
		<Wrapper>
			{chatType !== 0 && !sameUser && <Picture />}
			<ContentBox>
				{chatType !== 0 && !sameUser && (
					<DisplayNameContent>
						{ownMessage ? 'You' : 'Issam Ounejjar'}
					</DisplayNameContent>
				)}
				<MessageText sameUser={sameUser}>
					{message}
					<span>{moment(time).format('LT')}</span>
				</MessageText>
			</ContentBox>
		</Wrapper>
	);
}
