import {
  Injectable,
  CanActivate,
  ExecutionContext,
} from '@nestjs/common';
import { ColumnsService } from 'src/columns/columns.service';

@Injectable()
export class OwnerGuard implements CanActivate {
  constructor(private columnsService: ColumnsService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const isColumnExists = await this.columnsService.count({
      select: ['id'],
      where: {
        userId: request.user.id,
        id: parseInt(request.params.id),
      },
    });

    return !!isColumnExists;
  }
}
