import { User } from 'src/users/user.entity';
import {
  Unique,
  Entity,
  Column as ColumnORM,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinTable,
} from 'typeorm';

@Entity()
@Unique(['title'])
export class Column {
  @PrimaryGeneratedColumn()
  id: number;

  @ColumnORM()
  title: string;

  @ManyToOne((type) => User, (user) => user.columns)
  user: User;
}
