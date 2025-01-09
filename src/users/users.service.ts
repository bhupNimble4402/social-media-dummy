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

	/* create(createUserDto: CreateUserDto) {
		return 'This action adds a new user';
	}

	findAll() {
		return `This action returns all users`;
	}

	findOne(id: number) {
		return `This action returns a #${id} user`;
	}

	update(id: number, updateUserDto: UpdateUserDto) {
		return `This action updates a #${id} user`;
	}

	remove(id: number) {
		return `This action removes a #${id} user`;
	} */
}
