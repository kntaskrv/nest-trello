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
  password: string;
}
