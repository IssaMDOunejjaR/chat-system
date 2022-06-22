import { Loader, NoData, Conversation } from '..';
import { useAllUsersData } from '../../hooks/useAllUsersData';
import { User } from '../../types/user';
import { useLoggedUserData } from '../../hooks/useLoggedUserData';

export default function Friends() {
	const { data: user } = useLoggedUserData();
	const { data: friends, isLoading } = useAllUsersData();

	if (isLoading) return <Loader size={80} />;

	return (
		<>
			{friends?.data.length > 1 ? (
				friends?.data
					.filter((friend: User) => friend.id !== user?.data.id)
					.map((friend: User) => (
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
