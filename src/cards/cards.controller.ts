import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CardOwnerGuard } from './card-owner.guard';
import { Card } from './card.entity';
import { CardsService } from './cards.service';
import { ColumnCardsService } from './column-cards.service';

@Crud({
  model: {
    type: Card,
  },
  routes: {
    deleteOneBase: {
      decorators: [UseGuards(CardOwnerGuard)],
    },
  },
})
@UseGuards(JwtAuthGuard)
@Controller('cards')
export class CardsController implements CrudController<Card> {
  constructor(public service: CardsService) {}
}

@Crud({
  model: {
    type: Card,
  },
  params: {
    columnId: {
      field: 'column',
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
@Controller('columns/:columnId/cards')
export class ColumnCardsController {
  constructor(public service: ColumnCardsService) {}
}
