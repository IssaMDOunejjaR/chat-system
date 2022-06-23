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
import { useEffect, useState } from 'react';

interface Props {
	search: string;
}

export default function Channels({ search }: Props) {
	const {
		state: { id, chatType },
		dispatch,
	} = useUserContext();
	const { data: user } = useLoggedUserData();
	const { data: channels, isLoading } = useAllJoinedChannels(user);
	const [result, setResult] = useState(channels?.data);

	const handleClick = (id: number) => {
		dispatch({ type: 'SET_ID', id });
		dispatch({ type: 'SET_CONTENT', content: 'chat' });
	};

	useEffect(() => {
		if (search && chatType === 1 && channels?.data.length > 0) {
			setResult(
				channels?.data.filter((channel: any) =>
					channel.name.toLowerCase().includes(search.toLowerCase()),
				),
			);
		} else setResult(channels?.data);
	}, [search, chatType, channels?.data]);

	if (isLoading) return <Loader size={60} />;

	return (
		<>
			{result?.length > 0 ? (
				result.map((channel: any) => (
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
