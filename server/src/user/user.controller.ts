import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	ParseIntPipe,
	Put,
	Req,
	UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { Request } from 'express';
import { UserService } from './user.service';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('user')
@ApiTags('user')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class UserController {
	constructor(private userService: UserService) {}

	@Get('me')
	async getUserInfoByUsername(@Req() request: Request) {
		const { username } = request.user as User;

		return await this.userService.getUserInfoByUsername(username);
	}

	@Get('all')
	async getAllUsers(@Req() request: Request) {
		const { id } = request.user as User;

		return await this.userService.getAllUsers(id);
	}

	@Get(':id')
	async getUserInfoById(@Param('id') id: string) {
		return await this.userService.getUserInfoById(+id);
	}

	@Put(':id')
	async updateUserInfo(
		@Param('id', ParseIntPipe) id: number,
		@Body() body: UpdateUserDto,
	) {
		return await this.userService.updateUserInfo(id, body);
	}

	@Delete(':id')
	async deleteUser(@Param('id', ParseIntPipe) id: number) {
		return await this.userService.deleteuser(id);
	}
}
