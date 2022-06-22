import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserInfo } from 'src/interfaces/userInfo';

@Injectable()
export class AuthService {
	constructor(private jwtService: JwtService) {}

	login(userInfo: CreateUserInfo) {
		return {
			accessToken: this.jwtService.sign({
				username: userInfo.username,
				email: userInfo.email,
				displayName: userInfo.displayName,
				avatarUrl: userInfo.avatarUrl,
			}),
		};
	}
}
