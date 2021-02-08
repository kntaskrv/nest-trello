import { User } from 'src/users/user.entity';
import {
  Unique,
  Entity,
  Column as ColumnORM,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinTable,
  JoinColumn,
  OneToMany,
  Column,
} from 'typeorm';
import {
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  IsNotEmpty,
} from 'class-validator';
import { Card } from 'src/cards/card.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @IsNotEmpty()
  @ColumnORM()
  text: string;

  @ManyToOne((type) => User, (user) => user.comments)
  user: User;

  @IsNotEmpty()
  @ColumnORM()
  userId: User['id'];

  @ManyToOne((type) => Card, (card) => card.comments)
  card: Card;

  @IsNotEmpty()
  @ColumnORM()
  cardId: Card['id'];
}
