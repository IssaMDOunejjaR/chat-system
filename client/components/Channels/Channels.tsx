import { useAllJoinedChannels } from '../../hooks/useAllJoinedChannels';
import { useLoggedUserData } from '../../hooks/useLoggedUserData';
import Loader from '../Loader/Loader';
import {
	Container,
	PictureContainer,
	Picture,
	Info,
	Options,
	Status,
} from './style';
import moment from 'moment';
import NoData from '../NoData/NoData';
import { useUserContext } from '../../contexts/user';

export default function Channels() {
	const { data: user } = useLoggedUserData();
	const { data: channels, isLoading } = useAllJoinedChannels(user);
	const {
		state: { id },
		dispatch,
	} = useUserContext();

	const handleClick = (id: number) => {
		dispatch({ type: 'SET_ID', id });
		dispatch({ type: 'SET_CONTENT', content: 'chat' });
	};

	if (isLoading) return <Loader size={60} />;

	return (
		<>
			{channels?.data.length > 0 ? (
				channels?.data.map((channel: any) => (
					<Container
						key={channel.id}
						active={channel.id === id}
						onClick={() => handleClick(channel.id)}
					>
						<PictureContainer>
							<Picture
								src="https://llllll.com"
								alt={channel.name.toUpperCase()}
							/>
						</PictureContainer>
						<Info>
							<h3>{channel.name}</h3>
							{/* <p>
								{message?.data.senderId === user?.data.id &&
									'You: '}
								{message?.data.message}
							</p> */}
						</Info>
						<Options>
							{/* <p>{moment(message?.data.time).format('LT')}</p> */}
							<span>2</span>
						</Options>
					</Container>
				))
			) : (
				<NoData
					iconSize={80}
					textSize={30}
					text="You dont have any friends for now"
				/>
			)}
		</>
	);
}
