import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Like, Repository } from 'typeorm';
/* import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto'; */

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(User)
		private usersRepository: Repository<User>,
	) {}

	async usernameAlreadyUsed(username: string) {
		return await this.usersRepository.existsBy({
			username: Like(`%${username}%`),
		});
	}

	async findUserById(id: number) {
		return await this.usersRepository.findOneBy({ id });
	}

	async updateUserProfileImage(userId: number, filePath: string) {
		await this.usersRepository.update(
			{
				id: userId,
			},
			{
				profileImage: filePath.replaceAll('\\', '/'),
			},
		);

		return true;
	}
}
