import { UseGuards } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { OwnerGuard } from 'src/users/user.guard';
import { Column } from './column.entity';
import { ColumnsService } from './columns.service';
import { UserColumnsService } from './user-columns.service';

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
  routes: {
    deleteOneBase: {
      decorators: [UseGuards(OwnerGuard)],
    },
  },
})
@UseGuards(JwtAuthGuard)
@Controller('columns')
export class ColumnsController implements CrudController<Column> {
  constructor(public service: ColumnsService) {}
}

@Crud({
  model: {
    type: Column,
  },
  params: {
    userId: {
      field: 'user',
      type: 'number',
    },
    id: {
      field: 'id',
      type: 'number',
      primary: true,
    },
  },
})
@UseGuards(JwtAuthGuard)
@Controller('/users/:userId/columns')
export class UserColumnsController {
  constructor(public service: UserColumnsService) {}
}
