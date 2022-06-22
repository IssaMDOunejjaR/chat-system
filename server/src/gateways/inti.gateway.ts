import {
	OnGatewayConnection,
	OnGatewayDisconnect,
	SubscribeMessage,
	WebSocketGateway,
} from '@nestjs/websockets';
import { GatewaysService } from './gateways.service';
import { Socket } from 'socket.io';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';

@WebSocketGateway({ cors: true })
export class InitGateway implements OnGatewayConnection, OnGatewayDisconnect {
	constructor(
		private gatewaysService: GatewaysService,
		private prismaService: PrismaService,
		private jwtService: JwtService,
	) {}

	async handleConnection(client: Socket) {
		const { token } = client.handshake.query;

		if (token !== 'undefined') {
			const user: User = this.jwtService.verify(token as string);
			const userInfo = this.gatewaysService.users.get(user.username);

			if (!userInfo) {
				this.gatewaysService.users.set(user.username, {
					sockets: [client],
				});

				const updatedUser = await this.prismaService.user.update({
					where: { username: user.username },
					data: { status: 'ONLINE' },
				});

				this.gatewaysService.users.forEach((value, key) => {
					if (key !== user.username) {
						value.sockets.forEach((socket: Socket) => {
							socket.emit('userConnected', updatedUser);
						});
					}
				});
			} else {
				this.gatewaysService.users.set(user.username, {
					sockets: [...userInfo.sockets, client],
				});
			}

			console.log(
				'user: ',
				user.username,
				'=> sockets: ',
				this.gatewaysService.users
					.get(user.username)
					.sockets.map((socket: Socket) => socket.id),
			);
		}
	}

	@SubscribeMessage('userDisconnect')
	async handleUserDisconnet(client: Socket) {
		const { token } = client.handshake.query;

		if (token !== 'undefined') {
			const user: User = this.jwtService.verify(token as string);
			const userInfo = this.gatewaysService.users.get(user.username);

			if (userInfo) {
				userInfo.sockets = userInfo.sockets.filter(
					(socket: Socket) => socket.id !== client.id,
				);

				console.log(
					'user: ',
					user.username,
					'=> sockets: ',
					this.gatewaysService.users
						.get(user.username)
						.sockets.map((socket: Socket) => socket.id),
				);

				if (userInfo.sockets.length === 0) {
					this.gatewaysService.users.delete(user.username);

					const updatedUser = await this.prismaService.user.update({
						where: { username: user.username },
						data: { status: 'OFFLINE' },
					});

					this.gatewaysService.users.forEach((value, key) => {
						if (key !== user.username) {
							value.sockets.forEach((socket: Socket) => {
								socket.emit('userDisconnected', updatedUser);
							});
						}
					});
				}
			}
		}
		client.disconnect();
	}

	async handleDisconnect(client: Socket) {
		const { token } = client.handshake.query;

		if (token !== 'undefined') {
			const user: User = this.jwtService.verify(token as string);
			const userInfo = this.gatewaysService.users.get(user.username);

			if (userInfo) {
				userInfo.sockets = userInfo.sockets.filter(
					(socket: Socket) => socket.id !== client.id,
				);

				console.log(
					'user: ',
					user.username,
					'=> sockets: ',
					this.gatewaysService.users
						.get(user.username)
						.sockets.map((socket: Socket) => socket.id),
				);

				if (userInfo.sockets.length === 0) {
					this.gatewaysService.users.delete(user.username);

					const updatedUser = await this.prismaService.user.update({
						where: { username: user.username },
						data: { status: 'OFFLINE' },
					});

					this.gatewaysService.users.forEach((value, key) => {
						if (key !== user.username) {
							value.sockets.forEach((socket: Socket) => {
								socket.emit('userDisconnected', updatedUser);
							});
						}
					});
				}
			}
		}
		client.disconnect();
	}
}
