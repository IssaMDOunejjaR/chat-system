import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '@prisma/client';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@UseGuards(AuthGuard('42'))
	@Get('signin')
	handleSignin(@Req() request: Request, @Res() response: Response) {
		const { username, email, displayName, avatar } = request.user as User;

		const { accessToken } = this.authService.login({
			username: username,
			email: email,
			displayName: displayName,
			avatarUrl: avatar,
		});

		response.cookie('token', accessToken, {
			expires: new Date(Date.now() + 14400000),
		});

		response.redirect('http://localhost:3000/chat');
	}
}
