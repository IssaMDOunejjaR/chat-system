import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
	constructor(private userService: UserService) {}

	@UseGuards(JwtAuthGuard)
	@Get('me')
	async getUserInfoByUsername(@Req() request: Request) {
		const { username } = request.user as User;

		return await this.userService.getUserInfoByUsername(username);
	}

	@UseGuards(JwtAuthGuard)
	@Get('all')
	async getAllUsers() {
		return await this.userService.getAllUsers();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	async getUserInfoById(@Param('id') id: string) {
		return await this.userService.getUserInfoById(+id);
	}
}
