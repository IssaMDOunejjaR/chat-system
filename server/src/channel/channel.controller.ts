import {
	Body,
	Controller,
	Get,
	ParseIntPipe,
	Post,
	Query,
	UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ChannelService } from './channel.service';
import { CreateChannelDto } from './dto/createChannel.dto';

@Controller('channel')
export class ChannelController {
	constructor(private channelService: ChannelService) {}

	@UseGuards(JwtAuthGuard)
	@Get()
	async getJoinedChannels(@Query('userId', ParseIntPipe) id: number) {
		return await this.channelService.getAllJoinedChannels(id);
	}

	@UseGuards(JwtAuthGuard)
	@Post()
	async createChannel(@Body() body: CreateChannelDto) {
		return await this.channelService.createChannel(body);
	}

	@UseGuards(JwtAuthGuard)
	@Get('messages')
	async getChannelMessages(
		@Query('channelId', ParseIntPipe) channelId: number,
	) {
		return await this.channelService.getChannelMessages(channelId);
	}
}
