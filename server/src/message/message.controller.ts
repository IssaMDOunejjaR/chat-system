import {
	Controller,
	Get,
	ParseIntPipe,
	Query,
	Req,
	UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { MessageService } from './message.service';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { Request } from 'express';

@Controller('message')
@ApiTags('chat')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class MessageController {
	constructor(private messageService: MessageService) {}

	@Get()
	async getUserMessages(
		@Req() request: Request,
		@Query('with', ParseIntPipe) userId: number,
	) {
		const { id } = request.user as User;

		return this.messageService.getUserMessages(id, userId);
	}

	@Get('last')
	async getLastMessage(
		@Req() request: Request,
		@Query('with', ParseIntPipe) userId: number,
	) {
		const { id } = request.user as User;

		return await this.messageService.getLastMessage(id, userId);
	}
}
