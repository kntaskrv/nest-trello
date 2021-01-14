import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Crud({
  model: {
    type: User,
  },
})
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController implements CrudController<User> {
  constructor(public service: UsersService) {}
}
