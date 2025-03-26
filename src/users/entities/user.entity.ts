import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	fullname: string;

	@Column()
	username: string;

	@Column({
		unique: true,
	})
	email: string;

	@Column('text')
	password: string;

	@Column('date', {
		nullable: true,
		default: null,
	})
	dateOfBirth: Date | null;

	@Column('text', {
		nullable: true,
		default: null,
	})
	profileImage: string | null;

	@Column('longtext', {
		nullable: true,
		default: null,
	})
	bio: string | null;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@DeleteDateColumn()
	deletedAt: Date;
}
