import { IsNotEmpty } from 'class-validator';

export class LoginDto {
	@IsNotEmpty()
	loginValue: string;

	@IsNotEmpty()
	password: string;
}
