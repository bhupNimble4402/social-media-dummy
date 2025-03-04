import { Module } from '@nestjs/common';
import { AppContentService } from './app-content.service';
import { AppContentController } from './app-content.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppContent } from './dto/appContent.dto';
import { Post } from './dto/post.dto';
import { Status } from './dto/status.dto';

@Module({
	imports: [TypeOrmModule.forFeature([AppContent, Post, Status])],
	controllers: [AppContentController],
	providers: [AppContentService],
})
export class AppContentModule {}
