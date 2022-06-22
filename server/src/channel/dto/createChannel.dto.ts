import { Visibility } from '@prisma/client';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateChannelDto {
	@IsNotEmpty()
	name: string;

	visibility?: Visibility;

	password?: string;

	@IsNotEmpty()
	ownerId: number;
}
