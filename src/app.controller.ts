import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	async getHello(): Promise<object> {
		return await this.appService.getHello();
	}

	@Post()
	async postHello(): Promise<object> {
		return await this.appService.postHello();
	}

	@Put()
	async putHello(): Promise<object> {
		return await this.appService.putHello();
	}

	@Patch()
	async patchHello(): Promise<object> {
		return await this.appService.patchHello();
	}

	@Delete()
	async deleteHello(): Promise<object> {
		return await this.appService.deleteHello();
	}
}
