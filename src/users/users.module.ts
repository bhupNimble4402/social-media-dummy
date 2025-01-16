import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { MulterModule } from '@nestjs/platform-express';
import * as multer from 'multer';

@Module({
	imports: [
		TypeOrmModule.forFeature([User]),
		MulterModule.register({
			storage: multer.diskStorage({
				destination: './storage/profileImage',
				filename: (req, file, cb) => {
					const uniqueName = `${Date.now()}-${file.originalname}`;
					cb(null, uniqueName);
				},
			}),
		}),
	],
	controllers: [UsersController],
	providers: [UsersService],
	exports: [UsersService],
})
export class UsersModule {}
