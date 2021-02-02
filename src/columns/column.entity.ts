import { User } from 'src/users/user.entity';
import {
  Unique,
  Entity,
  Column as ColumnORM,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinTable,
} from 'typeorm';
import {
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  IsNotEmpty,
} from 'class-validator';

@Entity()
@Unique(['title'])
export class Column {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @MinLength(5)
  @IsNotEmpty()
  @ColumnORM()
  title: string;

  @ManyToOne((type) => User, (user) => user.columns)
  user: User;
}
