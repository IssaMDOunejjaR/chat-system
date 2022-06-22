import { useQuery } from 'react-query';
import { fetchAllJoinedChannels } from '../fetchers/channel';

export const useAllJoinedChannels = (user: any) => {
	return useQuery(
		'allJoinedChannels',
		() => fetchAllJoinedChannels(user?.data.id),
		{
			refetchOnWindowFocus: false,
			staleTime: Infinity,
			retry: 2,
			enabled: !!user?.data,
		},
	);
};
