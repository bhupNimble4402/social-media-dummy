import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import { Post } from './post.dto';

export class PostMedia {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	postId: number;

	@Column()
	type: string;

	@Column('text')
	path: string;

	@Column()
	sequence: number;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@DeleteDateColumn()
	deletedAt: Date;

	@ManyToOne(() => Post, (post) => post.id) // Match 'data' in the User entity
	post: Post;
}
