import {
	Controller,
	Get,
	ParseIntPipe,
	Query,
	UseGuards,
} from '@nestjs/common';
import { query, Request } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
	constructor(private messageService: MessageService) {}

	@UseGuards(JwtAuthGuard)
	@Get()
	async getUserMessages(
		@Query('userId', ParseIntPipe) userId,
		@Query('friendId', ParseIntPipe) friendId,
	) {
		return this.messageService.getUserMessages(userId, friendId);
	}

	@UseGuards(JwtAuthGuard)
	@Get('last')
	async getLastMessage(
		@Query('userId', ParseIntPipe) userId: number,
		@Query('friendId', ParseIntPipe) friendId: number,
	) {
		return await this.messageService.getLastMessage(userId, friendId);
	}
}
