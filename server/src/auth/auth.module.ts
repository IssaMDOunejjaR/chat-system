import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { O42Strategy } from './42.strategy';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtStrategy } from './jwt.strategy';
import { JwtAuthGuard } from './jwt-auth.guard';

@Module({
	imports: [
		PassportModule,
		UserModule,
		JwtModule.register({
			secret: process.env.SECRET,
			signOptions: { expiresIn: '3h' },
		}),
	],
	providers: [AuthService, O42Strategy, jwtStrategy, JwtAuthGuard],
	controllers: [AuthController],
	exports: [JwtAuthGuard, AuthService, JwtModule],
})
export class AuthModule {}
