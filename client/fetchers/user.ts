import { api } from '../services/api';

export const fecthAllUsers = () => {
	return api.get('/user/all');
};

export const fetchLoggedUserData = () => {
	return api.get('/user/me');
};

export const fetchUserData = (id: number) => {
	return api.get(`/user/${id}`);
};
