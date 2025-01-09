import * as bcrypt from 'bcrypt';

export class Hashing {
	static async make(password: string) {
		return await bcrypt.hash(password, 10);
	}

	static async verify(string: string, hashedString: string) {
		return await bcrypt.compare(string, hashedString);
	}
}
