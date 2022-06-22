import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';

type UserInfo = {
	sockets: Socket[];
};

@Injectable()
export class GatewaysService {
	public users: Map<string, UserInfo> = new Map<string, UserInfo>();
}
