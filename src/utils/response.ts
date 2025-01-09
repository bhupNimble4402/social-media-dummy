import { ErrorResponse } from 'src/interfaces/error-response.interface';
import { SimpleResponse } from 'src/interfaces/simple-response.interface';
import { SuccessResponse } from 'src/interfaces/success-response.interface';

export function successResponse(response: SuccessResponse) {
	return {
		status: true,
		data: response.data,
		message: response.message ?? 'response',
	};
}

export function errorResponse(response: ErrorResponse) {
	return {
		status: true,
		data: response.data,
		message: response.message ?? 'response',
	};
}

export function simpleResponse(response: SimpleResponse) {
	return {
		status: response.status,
		message: response.message,
	};
}
