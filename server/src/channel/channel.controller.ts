import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	ParseIntPipe,
	Post,
	Query,
	UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ChannelService } from './channel.service';
import { CreateChannelDto } from './dto/createChannel.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@Controller('channel')
@ApiTags('channel')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class ChannelController {
	constructor(private channelService: ChannelService) {}

	@Get()
	async getJoinedChannels(@Query('userId', ParseIntPipe) id: number) {
		return await this.channelService.getAllJoinedChannels(id);
	}

	@Post()
	async createChannel(@Body() body: CreateChannelDto) {
		return await this.channelService.createChannel(body);
	}

	@Get('messages')
	async getChannelMessages(@Query('channelId', ParseIntPipe) id: number) {
		return await this.channelService.getChannelMessages(id);
	}

	@Delete(':id')
	async deleteChannel(@Param('id', ParseIntPipe) id: number) {
		return await this.channelService.deleteChannel(id);
	}

	@Post(':id/add')
	async addUserToChannel(
		@Param('id', ParseIntPipe) channelId: number,
		@Body('id', ParseIntPipe) userId: number,
	) {
		return 'add';
	}
}
