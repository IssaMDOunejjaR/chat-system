import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
	@ApiProperty()
	username: string;

	@ApiProperty()
	displayName: string;

	@ApiProperty()
	email: string;

	@ApiProperty()
	avatar: string;

	@ApiProperty()
	twoFactor?: boolean;
}
