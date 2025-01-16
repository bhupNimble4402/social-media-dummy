import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

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
}
