import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '@prisma/client';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@UseGuards(AuthGuard('42'))
	@Get('signin')
	handleSignin(@Req() request: Request, @Res() response: Response) {
		const user = request.user as User;

		const { accessToken } = this.authService.login({
			...user,
		});

		response.cookie('token', accessToken, {
			expires: new Date(Date.now() + 14400000),
		});

		response.redirect('https://chat-system-liart.vercel.app/chat');
	}
}
