import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Column } from './column.entity';

@Injectable()
export class UserColumnsService extends TypeOrmCrudService<Column> {
  constructor(@InjectRepository(Column) repo) {
    super(repo);
  }
}
