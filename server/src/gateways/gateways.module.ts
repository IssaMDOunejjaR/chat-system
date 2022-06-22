import { Global, Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { InitGateway } from './inti.gateway';
import { GatewaysService } from './gateways.service';
import { ChatGateway } from './chat.gateway';

@Global()
@Module({
	imports: [PrismaModule, AuthModule],
	providers: [InitGateway, GatewaysService, ChatGateway],
	exports: [GatewaysService],
})
export class GatewaysModule {}
