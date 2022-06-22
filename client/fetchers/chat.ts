import { api } from '../services/api';

export const fetchPrivateMessages = (
	userId: number,
	friendId: number | null,
) => {
	return api.get('/message', {
		params: {
			userId,
			friendId,
		},
	});
};

export const fecthLastPrivateMessage = (
	userId: number,
	friendId: number | null,
) => {
	return api.get('/message/last', {
		params: {
			userId,
			friendId,
		},
	});
};
