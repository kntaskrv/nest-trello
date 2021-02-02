import { UseGuards } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
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
@UseGuards(JwtAuthGuard)
@Controller('columns')
export class ColumnsController implements CrudController<Column> {
  constructor(public service: ColumnsService) {}
}
