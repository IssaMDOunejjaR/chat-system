import { api } from '../services/api';

export const fetchPrivateMessages = (
	userId: number,
	friendId: number | null,
) => {
	return api.get('/message', {
		params: {
			with: friendId,
		},
	});
};

export const fecthLastPrivateMessage = (
	userId: number,
	friendId: number | null,
) => {
	return api.get('/message/last', {
		params: {
			with: friendId,
		},
	});
};
