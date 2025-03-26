import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { DataSource } from 'typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { KyaResponseJaaRhaHaiMiddleware } from './middleware/kya-response-jaa-rha-hai.middleware';
import { UsersController } from './users/users.controller';
import { AppContentModule } from './app-content/app-content.module';
import { FilesModule } from './files/files.module';
import { User } from './users/entities/user.entity';
import { AppContent } from './app-content/dto/appContent.dto';
import { Post } from './app-content/dto/post.dto';
import { Status } from './app-content/dto/status.dto';
import { PostMedia } from './app-content/dto/postMedia.dto';

@Module({
	imports: [
		ConfigModule.forRoot(),
		JwtModule.register({
			global: true,
			secret: process.env.JWT_SECRET,
		}),
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: process.env.DB_HOST,
			database: process.env.DB_NAME,
			username: process.env.DB_USERNAME,
			password: process.env.DB_PASSWORD,
			entities: [User, AppContent, Post, PostMedia, Status],
			synchronize: true,
		}),
		AuthModule,
		UsersModule,
		AppContentModule,
		FilesModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {
	constructor(private dataSource: DataSource) {}

	configure(consumer: MiddlewareConsumer) {
		consumer.apply(KyaResponseJaaRhaHaiMiddleware).forRoutes(UsersController);
	}
}
