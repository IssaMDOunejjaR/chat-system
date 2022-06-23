import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
	constructor(private jwtService: JwtService) {}

	login(userInfo: User) {
		return {
			accessToken: this.jwtService.sign({
				...userInfo,
			}),
		};
	}
}
