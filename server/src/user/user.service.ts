import { Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { CreateUserInfo } from 'src/interfaces/userInfo';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
	constructor(private prismaService: PrismaService) {}

	async getUserInfoByUsername(username: string) {
		try {
			const user = await this.prismaService.user.findUnique({
				where: {
					username,
				},
			});

			return user;
		} catch (error) {
			if (error instanceof PrismaClientKnownRequestError)
				console.log(error.message);
		}
	}

	async getUserInfoById(id: number) {
		try {
			const user = await this.prismaService.user.findUnique({
				where: {
					id,
				},
			});

			return user;
		} catch (error) {
			console.log(error);
		}
	}

	async createUser(userInfo: CreateUserInfo) {
		try {
			const user = await this.prismaService.user.create({
				data: {
					username: userInfo.username,
					email: userInfo.email,
					displayName: userInfo.displayName,
					avatar: userInfo.avatarUrl,
				},
			});

			return user;
		} catch (error) {
			if (error instanceof PrismaClientKnownRequestError)
				console.log(error.message);
		}
	}

	async getAllUsers() {
		try {
			const users = await this.prismaService.user.findMany();

			return users;
		} catch (error) {
			console.log(error);
		}
	}
}
