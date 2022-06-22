import { useMutation } from 'react-query';
import { createChannel } from '../fetchers/channel';

export const useCreateChannel = () => {
	return useMutation(createChannel);
};
