import { useAllJoinedChannels } from './useAllJoinedChannels';
import { useLoggedUserData } from './useLoggedUserData';

export const useChannelInfo = (id: number | null) => {
	const { data: user } = useLoggedUserData();
	const { data: channels } = useAllJoinedChannels(user?.data.id);

	return channels?.data.find((channel: any) => channel.id === id);
};
