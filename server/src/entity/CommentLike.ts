import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Comment from './Comment';
import User from './User';

@Entity()
export default class CommentLike {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.commentLikes)
  user: User;

  @ManyToOne(() => Comment, (comment) => comment.likes)
  comment: Comment;
}
