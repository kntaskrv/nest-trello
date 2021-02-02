import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColumnsModule } from 'src/columns/columns.module';
import { User } from './user.entity';
import {
  UserColumnsController,
  UsersController,
} from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]), ColumnsModule],
  controllers: [UsersController, UserColumnsController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
