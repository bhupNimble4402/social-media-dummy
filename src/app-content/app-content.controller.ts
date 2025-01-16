import { Controller } from '@nestjs/common';
import { AppContentService } from './app-content.service';

@Controller('app-content')
export class AppContentController {
	constructor(private readonly appContentService: AppContentService) {}
}
