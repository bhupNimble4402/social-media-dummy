import { Module } from '@nestjs/common';
import { AppContentService } from './app-content.service';
import { AppContentController } from './app-content.controller';

@Module({
	controllers: [AppContentController],
	providers: [AppContentService],
})
export class AppContentModule {}
