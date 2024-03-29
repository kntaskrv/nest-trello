import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Column } from './column.entity';
import { ColumnsController } from './columns.controller';
import { ColumnsService } from './columns.service';
import { UserColumnsService } from './user-columns.service';

@Module({
  imports: [TypeOrmModule.forFeature([Column])],
  controllers: [ColumnsController],
  providers: [ColumnsService, UserColumnsService],
  exports: [ColumnsService, UserColumnsService],
})
export class ColumnsModule {}
