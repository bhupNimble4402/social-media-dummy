import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { errorResponse, simpleResponse } from 'src/utils/response';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private jwtService: JwtService) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest();
		const token = this.extractTokenFromHeader(request);

		if (!token) {
			throw new UnauthorizedException(
				simpleResponse({
					status: false,
					message: 'Unauthorized',
				}),
			);
		}

		try {
			request['user'] = await this.jwtService.verifyAsync(token, {
				secret: process.env.JWT_SECRET,
			});
		} catch (error) {
			throw new UnauthorizedException(
				errorResponse({
					data: error,
					message: error?.message ?? 'Unauthorized',
				}),
			);
		}

		return true;
	}

	private extractTokenFromHeader(request: Request): string | undefined {
		const [type, token] = request.headers.authorization?.split(' ') ?? [];
		return type === 'Bearer' ? token : undefined;
	}
}
