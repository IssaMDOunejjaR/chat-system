import { useQuery } from 'react-query';
import { fecthLastPrivateMessage } from '../fetchers/chat';

export const useLastPrivateMessages = (
	user: any,
	userId: number,
	friendId: number | null,
) => {
	return useQuery(
		['lastMessage', userId, friendId],
		() => fecthLastPrivateMessage(userId, friendId),
		{
			refetchOnWindowFocus: false,
			staleTime: Infinity,
			retry: 2,
			enabled: !!user?.data && !!friendId,
		},
	);
};
