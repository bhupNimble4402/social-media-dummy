import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	UpdateDateColumn,
	PrimaryGeneratedColumn,
	ManyToOne,
	Entity,
} from 'typeorm';
import { Post } from './post.dto';

@Entity({ name: 'post_media' })
export class PostMedia {
	@PrimaryGeneratedColumn()
	id: number;

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

	@ManyToOne(() => Post, (post) => post.postMedia)
	post: Post;
}
