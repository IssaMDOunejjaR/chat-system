import { useQuery } from 'react-query';
import { fetchChannelMessages } from '../fetchers/channel';

export const useChannelMessages = (channelId: number | null) => {
	return useQuery(
		['channelMessages', channelId],
		() => fetchChannelMessages(channelId),
		{
			refetchOnWindowFocus: false,
			staleTime: Infinity,
			retry: 2,
		},
	);
};
