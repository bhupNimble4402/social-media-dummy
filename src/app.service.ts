import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	async getHello() {
		return {
			status: true,
			message: 'This is a get route!',
		};
	}

	async postHello() {
		return {
			status: true,
			message: 'This is a post route!',
		};
	}

	async putHello() {
		return {
			status: true,
			message: 'This is a put route!',
		};
	}

	async patchHello() {
		return {
			status: true,
			message: 'This is a patch route!',
		};
	}

	async deleteHello() {
		return {
			status: true,
			message: 'This is a delete route!',
		};
	}
}
