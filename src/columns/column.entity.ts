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
  @JoinColumn({ name: 'userId' })
  user: User;

  @ColumnORM()
  userId: User['id'];

  @OneToMany((type) => Card, (cards) => cards.column)
  cards: Card[];
}
