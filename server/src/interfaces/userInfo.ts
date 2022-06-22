import { UserStatus } from 'src/enums/userStatus';

export interface CreateUserInfo {
	username: string;
	email: string;
	displayName: string;
	avatarUrl: string;
	status?: UserStatus;
	twoFactor?: boolean;
}
