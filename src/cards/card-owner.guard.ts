import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ColumnsService } from 'src/columns/columns.service';
import { CardsService } from './cards.service';

@Injectable()
export class CardOwnerGuard implements CanActivate {
  constructor(
    private cardsService: CardsService,
    private columnsService: ColumnsService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const card = await this.cardsService.findOne(request.params.id);

    const isColumnExists = await this.columnsService.count({
      select: ['id'],
      where: {
        userId: request.user.id,
        id: card.columnId,
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
