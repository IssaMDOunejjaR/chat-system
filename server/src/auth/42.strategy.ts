import { Strategy } from 'passport-42';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';

@Injectable()
export class O42Strategy extends PassportStrategy(Strategy) {
	constructor(
		private userService: UserService,
		private authService: AuthService,
	) {
		super({
			clientID: process.env.CLIENT_ID,
			clientSecret: process.env.SECRET_ID,
			callbackURL: 'http://localhost:9000/auth/signin',
		});
	}

	async validate(
		accessToken: string,
		refreshToken: string,
		profile: any,
	): Promise<any> {
		const { username } = profile;

		let user = await this.userService.getUserInfoByUsername(username);

		if (!user) {
			user = await this.userService.createUser({
				username,
				email: profile.emails[0].value,
				displayName: profile.displayName,
				avatarUrl: profile.profileUrl,
			});
		}

		return user;
	}
}
