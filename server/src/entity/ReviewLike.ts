import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Review from './Review';
import User from './User';

@Entity()
export default class ReviewLike {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.reviewLikes)
  user: User;

  @ManyToOne(() => Review, (review) => review.likes)
  review: Review;
}
