import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Column } from 'src/columns/column.entity';
import { Comment } from 'src/comment/comment.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column as ColumnORM,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @MinLength(5)
  @IsNotEmpty()
  @ColumnORM()
  title: string;

  @ManyToOne((type) => Column, (column) => column.cards)
  column: Column;

  @IsNotEmpty()
  @ColumnORM()
  columnId: Column['id'];

  @OneToMany((type) => Comment, (comments) => comments.card)
  comments: Comment[];
}
