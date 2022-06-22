import { useUserData } from '../../hooks/useUserData';
import { User } from '../../types/user';
import { Header, Picture, Info, ButtonHeader } from './styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InfoIcon from '@mui/icons-material/Info';
import { useUserContext } from '../../contexts/user';

export default function ChatHeader() {
	const {
		state: { id, chatType },
		dispatch,
	} = useUserContext();
	const friend: User = useUserData(id);

	const setInfo = () => dispatch({ type: 'SET_CONTENT', content: 'joined' });
	const setChat = () => {
		dispatch({ type: 'SET_CONTENT', content: 'conversation' });
		dispatch({ type: 'SET_ID', id: null });
	};

	return (
		<Header>
			<Picture src={friend.avatar} alt={friend.displayName} />
			<Info>
				<h2>{friend.displayName}</h2>
				<p>Last seen: {friend.status}</p>
			</Info>
			{chatType === 1 && id && (
				<ButtonHeader onClick={setInfo}>
					<InfoIcon />
				</ButtonHeader>
			)}
			<ButtonHeader onClick={setChat}>
				<ArrowBackIcon />
			</ButtonHeader>
		</Header>
	);
}
