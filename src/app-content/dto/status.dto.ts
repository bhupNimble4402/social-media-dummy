import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	UpdateDateColumn,
	PrimaryGeneratedColumn,
	Entity,
	OneToOne,
} from 'typeorm';
import { AppContent } from './appContent.dto';

@Entity({ name: 'status' })
export class Status {
	@PrimaryGeneratedColumn()
	id: number;

	@Column('text')
	message: string;

	@Column()
	position: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@DeleteDateColumn()
	deletedAt: Date;

	@OneToOne(() => AppContent, (appContent) => appContent.status)
	appContent: AppContent;
}
