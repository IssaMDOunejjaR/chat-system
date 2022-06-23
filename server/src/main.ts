import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule, {
		cors: {
			origin: 'https://chat-system-liart.vercel.app/',
			credentials: true,
		},
	});

	const config = new DocumentBuilder()
		.setTitle('Chat System')
		.addTag('user')
		.addBearerAuth()
		.build();

	const document = SwaggerModule.createDocument(app, config);

	SwaggerModule.setup('api', app, document);

	app.useGlobalPipes(new ValidationPipe());

	await app.listen(process.env.PORT);
}

bootstrap();
