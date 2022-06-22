import { api } from '../services/api';

export const fetchAllJoinedChannels = (userId: number) => {
	return api.get('channel', { params: { userId } });
};

export const fetchChannelMessages = (channelId: number | null) => {
	return api.get('channel/messages', { params: { channelId } });
};

export const createChannel = (data: any) => {
	return api.post('channel', data);
};
