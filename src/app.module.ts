import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { AuthModule } from './auth/auth.module';
import { Column } from './columns/column.entity';
import { ColumnsModule } from './columns/columns.module';
import { Card } from './cards/card.entity';
import { CardsModule } from './cards/cards.module';
import { Comment } from './comment/comment.entity';
import { CommentsModule } from './comment/comments.module';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    UsersModule,
    ColumnsModule,
    CardsModule,
    CommentsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'nest_pg',
      password: '',
      database: 'nest-trello',
      entities: [User, Column, Card, Comment],
      synchronize: true,
    }),
    // LoggerModule.forRoot({
    //   pinoHttp: {
    //     prettyPrint: { colorize: true },
    //     level: 'debug',
    //     useLevelLabels: true,
    //   },
    // }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
