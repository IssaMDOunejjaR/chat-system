import { useQuery } from 'react-query';
import { fetchPrivateMessages } from '../fetchers/chat';

export const usePrivateMessages = (
	user: any,
	userId: number,
	friendId: number | null,
) => {
	return useQuery(
		['message', userId, friendId],
		() => fetchPrivateMessages(userId, friendId),
		{
			refetchOnWindowFocus: false,
			staleTime: Infinity,
			retry: 2,
			enabled: !!user?.data && !!friendId,
		},
	);
};
