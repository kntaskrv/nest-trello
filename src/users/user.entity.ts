import { Column } from 'src/columns/column.entity';
import { classToPlain, Exclude } from 'class-transformer';
import { Comment } from 'src/comment/comment.entity';
import {
  Unique,
  Entity,
  Column as ColumnORM,
  PrimaryGeneratedColumn,
  OneToMany,
  MongoRepository,
} from 'typeorm';
import {
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  IsNotEmpty,
} from 'class-validator';

@Entity()
@Unique(['username'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @MinLength(5)
  @IsString()
  @ColumnORM()
  username: string;

  @IsNotEmpty()
  @MinLength(5)
  @ColumnORM({ nullable: true })
  password: string;

  @OneToMany((type) => Column, (columns) => columns.user)
  columns: Column[];

  @OneToMany((type) => Comment, (comments) => comments.user)
  comments: Comment[];
}
