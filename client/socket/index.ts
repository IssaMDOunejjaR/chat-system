import { QueryClient } from 'react-query';
import { User } from '../types/user';

export const updateUserInfo = (data: any, queryClient: QueryClient) => {
	queryClient.setQueriesData('allUsersData', (oldData: any) => {
		return {
			...oldData,
			data: [
				...oldData.data.filter((user: User) => user.id !== data.id),
				data,
			],
		};
	});
};

export const updatePrivateMessages = (
	data: any,
	userId: number,
	queryClient: QueryClient,
) => {
	queryClient.setQueriesData(
		[
			'message',
			userId,
			data.senderId === userId ? data.receiverId : data.senderId,
		],
		(oldData: any) => {
			return {
				...oldData,
				data: [...oldData.data, data],
			};
		},
	);
	queryClient.setQueriesData(
		[
			'lastMessage',
			userId,
			data.senderId === userId ? data.receiverId : data.senderId,
		],
		(oldData: any) => ({ ...oldData, data }),
	);
};
