import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class KyaResponseJaaRhaHaiMiddleware implements NestMiddleware {
	use(req: Request, res: Response, next: NextFunction) {
		next();
	}
}
