import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateChannelDto } from './dto/createChannel.dto';

@Injectable()
export class ChannelService {
	constructor(private prismaService: PrismaService) {}

	async getAllJoinedChannels(id: number) {
		try {
			const channels = await this.prismaService.channel.findMany({
				where: {
					user: {
						some: {
							id,
						},
					},
				},
				include: {
					user: {},
				},
			});

			return channels;
		} catch (error) {
			console.log(error);
		}
	}

	async createChannel(body: CreateChannelDto) {
		try {
			const channel = await this.prismaService.channel.create({
				data: {
					name: body.name,
					visibility: body.visibility,
					password: body.password,
					ownerId: body.ownerId,
					user: { connect: { id: body.ownerId } },
				},
			});

			return channel;
		} catch (error) {
			console.log(error);
		}
	}

	async getChannelMessages(id: number) {
		try {
			const messages = await this.prismaService.channelMessage.findMany({
				where: { channelId: id },
			});

			return messages;
		} catch (error) {
			console.log(error);
		}
	}

	async deleteChannel(id: number) {
		try {
			const deleteChannel = await this.prismaService.channel.delete({
				where: { id },
			});

			return deleteChannel;
		} catch (error) {
			console.log(error);
		}
	}

	async addUserToChannel(channelId: number, userId: number) {
		try {
			// const result = await this.prismaService.channel.update({
			// 	where: { id: channelId },
			// 	data: {user: },
			// });
		} catch (error) {
			console.log(error);
		}
	}
}
