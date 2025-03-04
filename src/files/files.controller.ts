import {
	BadRequestException,
	Controller,
	Get,
	Param,
	Res,
} from '@nestjs/common';
import { FilesService } from './files.service';
import { createReadStream } from 'fs';
import { join } from 'path';
import { Response } from 'express';
import { errorResponse, simpleResponse } from 'src/utils/response';

@Controller('files')
export class FilesController {
	constructor(private readonly filesService: FilesService) {}

	@Get(':filepath(*)')
	getFiles(@Param() param: any, @Res() res: Response) {
		try {
			if (param.filepath) {
				let file = createReadStream(
					join(process.cwd(), param.filepath),
				);

				return file.pipe(res);
			}

			throw new BadRequestException(
				simpleResponse({
					status: false,
					message: `File "${param.filepath}" not found`,
				}),
			);
		} catch (error) {
			throw new BadRequestException(
				errorResponse({
					data: error,
					message: `File "${param.filepath}" not found`,
				}),
			);
		}
	}
}
