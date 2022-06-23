import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

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

	async createUser(userInfo: CreateUserDto) {
		try {
			const user = await this.prismaService.user.create({
				data: {
					...userInfo,
				},
			});

			return user;
		} catch (error) {
			if (error instanceof PrismaClientKnownRequestError)
				console.log(error.message);
		}
	}

	async getAllUsers(id: number) {
		try {
			const users = await this.prismaService.user.findMany();

			return users.filter((user: User) => user.id !== id);
		} catch (error) {
			console.log(error);
		}
	}

	async updateUserInfo(id: number, userData: UpdateUserDto) {
		try {
			const updatedUser = await this.prismaService.user.update({
				where: {
					id,
				},
				data: { ...userData },
			});

			return updatedUser;
		} catch (error) {
			console.log(error);
		}
	}

	async deleteuser(id: number) {
		try {
			const deletedUser = await this.prismaService.user.delete({
				where: { id },
			});

			return deletedUser;
		} catch (error) {
			console.log(error);
		}
	}
}
