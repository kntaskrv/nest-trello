import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ColumnsService } from 'src/columns/columns.service';
import { CommentsService } from './comments.service';

@Injectable()
export class CommentOwnerGuard implements CanActivate {
  constructor(private commentService: CommentsService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const isColumnExists = await this.commentService.count({
      select: ['id'],
      where: {
        userId: request.user.id,
        id: parseInt(request.params.id),
      },
    });

    if (!!isColumnExists == false) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a custom message',
        },
        HttpStatus.FORBIDDEN,
      );
    }

    return !!isColumnExists;
  }
}
