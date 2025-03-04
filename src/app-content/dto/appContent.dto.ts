import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
	OneToOne,
	JoinColumn,
	Entity,
} from 'typeorm';
import { Post } from './post.dto';
import { Status } from './status.dto';

@Entity({ name: 'app_content' })
export class AppContent {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	contentId: number;

	@Column({ default: 0 })
	totalLikes: number;

	@Column({ default: 0 })
	totalComments: number;

	// Options
	@Column({ default: false })
	isLikesCountShow: boolean;

	@Column({ default: false })
	isCommentsShow: boolean;

	@Column({ default: false })
	isDownloadable: boolean;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@DeleteDateColumn()
	deletedAt: Date;

	// Relationships
	@OneToOne(() => Post, (post) => post.appContent, { cascade: true })
	@JoinColumn()
	post: Post;

	@OneToOne(() => Status, (status) => status.appContent, { cascade: true })
	@JoinColumn()
	status: Status;
}
