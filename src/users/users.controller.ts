import {
	Controller,
	Get,
	Post,
	Request,
	UploadedFile,
	UseGuards,
	UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { successResponse } from 'src/utils/response';
import { FileInterceptor } from '@nestjs/platform-express';

@UseGuards(AuthGuard)
@Controller('user')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Get('profile')
	async profile(@Request() request) {
		let {
			id,
			fullname,
			email,
			username,
			dateOfBirth,
			createdAt,
			profileImage,
		} = await this.usersService.findUserById(request.user.id);

		return successResponse({
			data: {
				id,
				fullname,
				email,
				username,
				dateOfBirth,
				profileImage,
				createdAt,
			},
			message: 'profile fetched successfully',
		});
	}

	@Post('upload-profile-image')
	@UseInterceptors(FileInterceptor('profileImage'))
	async uploadProfileImage(
		@Request() request,
		@UploadedFile() file: Express.Multer.File,
	) {
		await this.usersService.updateUserProfileImage(
			request.user.id,
			file.path,
		);

		return successResponse({
			data: `${file.path.replaceAll('\\', '/')}`,
			message: 'Profile updated successfully',
		});
	}
}
