import { Type } from 'class-transformer';
import {
	IsDate,
	IsEmail,
	IsNotEmpty,
	IsStrongPassword,
	Length,
} from 'class-validator';

export class RegisterDto {
	@IsNotEmpty()
	fullname: string;

	@IsNotEmpty()
	@Length(4, 15)
	username: string;

	@IsNotEmpty()
	@IsEmail()
	email: string;

	@IsStrongPassword()
	password: string;

	@IsNotEmpty()
	@Type(() => Date)
	@IsDate()
	dateOfBirth: Date;
}
