import { Status } from '../enums/status';

export type User = {
	id: number;
	username: string;
	displayName: string;
	email: string;
	avatar: string;
	status: Status;
	twoFactor: boolean;
};
