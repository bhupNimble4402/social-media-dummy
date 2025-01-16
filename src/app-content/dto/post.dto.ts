import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

import { PostMedia } from './postMedia.dto';

export class Post {
	@PrimaryGeneratedColumn()
	id: number;

	@Column('text')
	caption: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@DeleteDateColumn()
	deletedAt: Date;

	@OneToMany(() => PostMedia, (PostMedia) => PostMedia.postId)
	data: PostMedia[];
}
