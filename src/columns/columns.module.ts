import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { Column } from './column.entity';
import {
  ColumnsController,
  UserColumnsController,
} from './columns.controller';
import { ColumnsService } from './columns.service';
import { UserColumnsService } from './user-columns.service';
console.log(UsersModule);
@Module({
  imports: [UsersModule, TypeOrmModule.forFeature([Column])],
  controllers: [ColumnsController, UserColumnsController],
  providers: [ColumnsService, UserColumnsService],
  exports: [ColumnsService, UserColumnsService],
})
export class ColumnsModule {}
