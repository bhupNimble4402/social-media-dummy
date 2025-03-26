import {
	BadRequestException,
	Body,
	Controller,
	HttpCode,
	HttpStatus,
	Post,
	UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { simpleResponse, successResponse } from 'src/utils/response';
import { LoginDto } from './dto/login.dto';
import { Hashing } from 'src/utils/hashing';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@HttpCode(HttpStatus.OK)
	@Post('login')
	async login(@Body() login: LoginDto) {
		let user = await this.authService.findUserByLoginValue(login.loginValue);

		if (!(await Hashing.verify(login.password, user?.password))) {
			throw new UnauthorizedException(
				simpleResponse({
					status: false,
					message: 'User not found',
				}),
			);
		}

		return successResponse({
			message: 'User logged in successfully',
			data: await this.authService.generateTokens(user),
		});
	}

	@Post('register')
	async register(@Body() register: RegisterDto) {
		if (await this.authService.usernameAlreadyUsed(register.username)) {
			throw new BadRequestException(
				simpleResponse({
					status: false,
					message: 'This username is already taken',
				}),
			);
		}

		let user = await this.authService.registerUser(register);

		return successResponse({
			data: user,
			message: 'reached',
		});
	}
}
