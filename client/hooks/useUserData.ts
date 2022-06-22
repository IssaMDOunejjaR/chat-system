import { User } from '../types/user';
import { useAllUsersData } from './useAllUsersData';

export const useUserData = (id: number | null) => {
	const { data } = useAllUsersData();

	return data?.data.find((user: User) => user.id === id);
};
