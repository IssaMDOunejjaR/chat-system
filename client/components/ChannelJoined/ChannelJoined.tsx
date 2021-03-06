import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from 'react';
import { useUserContext } from '../../contexts/user';
import { useChannelInfo } from '../../hooks/useChannelInfo';
import { User } from '../../types/user';
import {
	Container,
	Header,
	UsersContainer,
	Button,
	ContainerOffline,
	UserItem,
	Picture,
	DisplayName,
} from './style';

interface JoinedUserProps {
	displayName: string;
	online: boolean;
}

const JoinedUser = ({ displayName, online }: JoinedUserProps) => {
	if (online) {
		return (
			<UserItem>
				<Picture />
				<DisplayName>{displayName}</DisplayName>
			</UserItem>
		);
	}

	return (
		<ContainerOffline>
			<Picture />
			<DisplayName>{displayName}</DisplayName>
		</ContainerOffline>
	);
};

export default function ChannelJoined() {
	const {
		state: { id },
		dispatch,
	} = useUserContext();
	const channel = useChannelInfo(id);

	const handleClick = () =>
		dispatch({ type: 'SET_CONTENT', content: 'chat' });

	return (
		<Container
			key="ChannelJoined"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Header>
				<h2>Joined Users</h2>
				<Button onClick={handleClick}>
					<ArrowBackIcon />
				</Button>
			</Header>
			<UsersContainer>
				{channel?.user.map((user: User) => (
					<JoinedUser
						key={user.id}
						displayName={user.displayName}
						online={user.status === 'ONLINE'}
					/>
				))}
			</UsersContainer>
		</Container>
	);
}
