import {
	Container,
	PictureContainer,
	Picture,
	Info,
	Options,
	Status,
} from './style';
import moment from 'moment';
import { useLoggedUserData } from '../../hooks/useLoggedUserData';
import { useUserContext } from '../../contexts/user';
import { User } from '../../types/user';
import { useLastPrivateMessages } from '../../hooks/useLastPrivateMessage';

export default function Conversation({ data }: { data: User }) {
	const { state, dispatch } = useUserContext();
	const { id, displayName, avatar, status } = data;
	const { data: user } = useLoggedUserData();
	const { data: message } = useLastPrivateMessages(user, user?.data.id, id);

	const handleClick = () => {
		dispatch({ type: 'SET_ID', id });
		dispatch({ type: 'SET_CONTENT', content: 'chat' });
	};

	return (
		<Container active={state.id === id} onClick={handleClick}>
			<PictureContainer>
				<Picture src={avatar} alt={displayName} />
				{status === 'ONLINE' && <Status />}
			</PictureContainer>
			<Info>
				<h3>{displayName}</h3>
				<p>
					{message?.data.senderId === user?.data.id && 'You: '}
					{message?.data.message}
				</p>
			</Info>
			<Options>
				<p>{moment(message?.data.time).format('LT')}</p>
				<span>2</span>
			</Options>
		</Container>
	);
}
