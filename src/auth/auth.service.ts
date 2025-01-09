import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Like, Repository } from 'typeorm';
import { RegisterDto } from './dto/register.dto';
import { Hashing } from 'src/utils/hashing';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
	constructor(
		@InjectRepository(User)
		private usersRepository: Repository<User>,
		private jwtService: JwtService,
	) {}

	async usernameAlreadyUsed(username: string) {
		return await this.usersRepository.existsBy({
			username: Like(`%${username}%`),
		});
	}

	async findUserByLoginValue(value: string) {
		return await this.usersRepository.findOne({
			where: [{ username: Like(`${value}`) }],
		});
	}

	async registerUser(register: RegisterDto) {
		let { fullname, dateOfBirth, email, password, username } = register;

		let user = this.usersRepository.create({
			fullname: fullname,
			username: username,
			email: email,
			dateOfBirth: new Date(dateOfBirth),
			password: await Hashing.make(password),
		});

		await this.usersRepository.save(user);

		return user;
	}

	async generateTokens(user: User) {
		let userObj = {
			id: user.id,
		};

		return {
			accessToken: await this.jwtService.signAsync(userObj, {
				expiresIn: '10d',
			}),
			refreshToken: await this.jwtService.signAsync(userObj, {
				expiresIn: '60d',
			}),
		};
	}
}
