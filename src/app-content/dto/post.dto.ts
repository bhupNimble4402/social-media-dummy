import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	UpdateDateColumn,
	PrimaryGeneratedColumn,
	OneToMany,
	OneToOne,
	Entity,
} from 'typeorm';
import { PostMedia } from './postMedia.dto';
import { AppContent } from './appContent.dto';

@Entity({ name: 'posts' })
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

	@OneToOne(() => AppContent, (appContent) => appContent.post)
	appContent: AppContent;

	@OneToMany(() => PostMedia, (postMedia) => postMedia.post, {
		cascade: true,
	})
	postMedia: PostMedia[];
}
