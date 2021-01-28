import { Column } from 'src/columns/column.entity';
import { Exclude } from 'class-transformer';
import {
  Unique,
  Entity,
  Column as ColumnORM,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

@Entity()
@Unique(['username'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @ColumnORM()
  username: string;

  @ColumnORM()
  @Exclude()
  password: string;

  @OneToMany((type) => Column, (columns) => columns.user)
  columns: Column[];
}
