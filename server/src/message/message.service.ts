import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MessageService {
	constructor(private prismaService: PrismaService) {}

	async getUserMessages(userId: number, friendId: number) {
		try {
			const message = await this.prismaService.message.findMany({
				where: {
					OR: [
						{ senderId: userId, receiverId: friendId },
						{ senderId: friendId, receiverId: userId },
					],
				},
				include: {
					receiver: true,
				},
			});

			return message;
		} catch (error) {
			console.log(error);
		}
	}

	async getLastMessage(userId: number, friendId: number) {
		try {
			const lastMessage = await this.prismaService.message.findFirst({
				where: {
					OR: [
						{ senderId: userId, receiverId: friendId },
						{ senderId: friendId, receiverId: userId },
					],
				},
				orderBy: {
					time: 'desc',
				},
				take: 1,
			});

			return lastMessage;
		} catch (error) {
			console.log(error);
		}
	}
}
