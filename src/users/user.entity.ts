import { Column } from 'src/columns/column.entity';
import { Exclude } from 'class-transformer';
import {
  Unique,
  Entity,
  Column as ColumnORM,
  PrimaryGeneratedColumn,
  OneToMany,
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
  @ColumnORM()
  // @Exclude()
  password: string;

  @OneToMany((type) => Column, (columns) => columns.user)
  columns: Column[];
}
