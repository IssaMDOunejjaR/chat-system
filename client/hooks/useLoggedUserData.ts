import { useQuery } from 'react-query';
import { fetchLoggedUserData } from '../fetchers/user';

export const useLoggedUserData = () => {
	return useQuery('loggedUserData', fetchLoggedUserData, {
		refetchOnWindowFocus: false,
		staleTime: Infinity,
		retry: 2,
	});
};
