import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { User } from '@prisma/client';
import { Socket } from 'socket.io';
import { PrismaService } from 'src/prisma/prisma.service';
import { GatewaysService } from './gateways.service';
import { JwtService } from '@nestjs/jwt';

@WebSocketGateway({
	cors: {
		origin: 'https://chat-system-liart.vercel.app',
		credentials: true,
	},
})
export class ChatGateway {
	constructor(
		private gatewaysService: GatewaysService,
		private prismaService: PrismaService,
		private jwtService: JwtService,
	) {}

	@SubscribeMessage('privateMessage')
	async handleMessage(client: Socket, payload: any) {
		const { token } = client.handshake.query;

		if (token !== 'undefined') {
			const user: User = this.jwtService.verify(token as string);
			const userInfo = this.gatewaysService.users.get(user.username);
			const { senderId, receiverId, message } = payload;

			const createdMessage = await this.prismaService.message.create({
				data: {
					senderId,
					receiverId,
					message,
				},
			});

			const receiver = await this.prismaService.user.findUnique({
				where: { id: receiverId },
			});

			const userReceiver = this.gatewaysService.users.get(
				receiver.username,
			);

			if (userInfo) {
				userInfo.sockets.forEach((socket: Socket) => {
					socket.emit('newMessage', createdMessage);
					socket.emit('updateLastMessage', createdMessage);
				});
			}

			if (user) {
				userReceiver.sockets.forEach((socket: Socket) => {
					socket.emit('newMessage', createdMessage);
					socket.emit('updateLastMessage', createdMessage);
				});
			}
		}
	}
}
