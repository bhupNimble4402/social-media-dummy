import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { JwtModule } from '@nestjs/jwt';
import { KyaResponseJaaRhaHaiMiddleware } from './middleware/kya-response-jaa-rha-hai.middleware';
import { UsersController } from './users/users.controller';

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
			entities: [__dirname + '/**/*.entity{.ts,.js}'],
			synchronize: true,
		}),
		AuthModule,
		UsersModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {
	constructor(private dataSource: DataSource) {}

	configure(consumer: MiddlewareConsumer) {
		consumer
			.apply(KyaResponseJaaRhaHaiMiddleware)
			.forRoutes(UsersController);
	}
}
