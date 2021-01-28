import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Column } from './column.entity';
import { ColumnsService } from './columns.service';

@Crud({
  model: {
    type: Column,
  },
  query: {
    join: {
      user: {
        eager: true,
      },
    },
  },
})
@Controller('columns')
export class ColumnsController implements CrudController<Column> {
  constructor(public service: ColumnsService) {}
}
