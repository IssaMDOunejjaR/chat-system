import { useQuery } from 'react-query';
import { fecthAllUsers } from '../fetchers/user';

export const useAllUsersData = () => {
	return useQuery('allUsersData', fecthAllUsers, {
		refetchOnWindowFocus: false,
		staleTime: Infinity,
		retry: 2,
	});
};
