import { useUserContext } from '../../contexts/user';
import { Header, Picture, Info, ButtonHeader } from './style';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InfoIcon from '@mui/icons-material/Info';
import { useChannelInfo } from '../../hooks/useChannelInfo';

export default function ChannelHeader() {
	const {
		state: { id, chatType },
		dispatch,
	} = useUserContext();
	const channel = useChannelInfo(id);

	const setInfo = () => dispatch({ type: 'SET_CONTENT', content: 'joined' });
	const setChat = () => {
		dispatch({ type: 'SET_CONTENT', content: 'conversation' });
		dispatch({ type: 'SET_ID', id: null });
	};

	return (
		<Header>
			<Picture
				src="https://hahahaha.com"
				alt={channel.name.toUpperCase()}
			/>
			<Info>
				<h2>{channel.name}</h2>
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
