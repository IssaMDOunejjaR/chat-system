import { Loader, NoData, Conversation } from '..';
import { useAllUsersData } from '../../hooks/useAllUsersData';
import type { User } from '../../types/user';
import { useLoggedUserData } from '../../hooks/useLoggedUserData';
import React, { useEffect, useState } from 'react';
import { useUserContext } from '../../contexts/user';

interface Props {
	search: string;
}

export default function Friends({ search }: Props) {
	const {
		state: { chatType },
	} = useUserContext();
	const { data: user } = useLoggedUserData();
	const { data: friends, isLoading } = useAllUsersData();
	// const listFriends = !isLoading
	// 	? friends?.data.filter((friend: User) => user?.data.id !== friend.id)
	// 	: [];
	const [result, setResult] = useState<User[]>([]);

	// useEffect(() => {
	// 	if (search && chatType === 0 && listFriends.length > 0) {
	// 		setResult(
	// 			listFriends.filter((user: User) =>
	// 				user.displayName
	// 					.toLowerCase()
	// 					.includes(search.toLowerCase()),
	// 			),
	// 		);
	// 	} else setResult(listFriends);
	// }, [search, chatType, listFriends]);

	if (isLoading || !friends) return <Loader size={80} />;

	return (
		<>
			{friends.data.length > 0 ? (
				friends.data.map((friend: User) => (
					<Conversation key={friend.id} data={friend} />
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
