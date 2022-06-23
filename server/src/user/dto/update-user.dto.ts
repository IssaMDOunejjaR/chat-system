import { IsBoolean, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
	@ApiProperty({ required: false })
	@IsString()
	displayName?: string;

	@ApiProperty({ required: false })
	@IsString()
	avatar?: string;

	@ApiProperty({ required: false })
	@IsBoolean()
	twoFactor?: boolean;
}
