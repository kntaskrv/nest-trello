import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Column } from './column.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class ColumnsService extends TypeOrmCrudService<Column> {
  constructor(@InjectRepository(Column) repo) {
    super(repo);
  }
}
