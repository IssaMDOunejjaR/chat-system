import { Visibility } from '@prisma/client';
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateChannelDto {
	@IsNotEmpty()
	@ApiProperty()
	name: string;

	@ApiProperty({ required: false })
	visibility?: Visibility;

	@ApiProperty({ required: false })
	password?: string;

	@ApiProperty()
	@IsNotEmpty()
	ownerId: number;
}
