import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import Comment from './Comment';
import ReviewLike from './ReviewLike';

import User from './User';

@Entity()
export default class Review {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.reviews)
  user: User;

  @OneToMany(() => ReviewLike, (reviewLike) => reviewLike.review)
  likes: ReviewLike[];

  @OneToMany(() => Comment, (comment) => comment.review)
  comments: Comment[];

  @Column()
  title: string;

  @Column('text')
  content: string;

  @Column()
  numberOfPaws: number;
}
