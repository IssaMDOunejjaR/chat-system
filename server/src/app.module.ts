import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GatewaysModule } from './gateways/gateways.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { MessageModule } from './message/message.module';
import { ChannelModule } from './channel/channel.module';

@Module({
	imports: [
		ConfigModule.forRoot(),
		GatewaysModule,
		AuthModule,
		PrismaModule,
		UserModule,
		MessageModule,
		ChannelModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
