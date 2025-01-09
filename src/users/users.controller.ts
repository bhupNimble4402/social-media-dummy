import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { successResponse } from 'src/utils/response';
/* import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto'; */

@UseGuards(AuthGuard)
@Controller('user')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Get('profile')
	async profile(@Request() request) {
		let { id, fullname, email, username, dateOfBirth, createdAt } =
			await this.usersService.findUserById(request.user.id);

		return successResponse({
			data: { id, fullname, email, username, dateOfBirth, createdAt },
			message: 'profile fetched successfully',
		});
	}
}
