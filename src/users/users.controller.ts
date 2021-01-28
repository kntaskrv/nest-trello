import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Column } from 'src/columns/column.entity';
import { UserColumnsService } from 'src/columns/user-columns.service';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Crud({
  model: {
    type: User,
  },
  query: {
    join: {
      columns: {
        eager: true,
      },
    },
  },
})
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController implements CrudController<User> {
  constructor(public service: UsersService) {}
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
