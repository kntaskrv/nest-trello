import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColumnsModule } from 'src/columns/columns.module';
import { Card } from './card.entity';
import {
  CardsController,
  ColumnCardsController,
} from './cards.controller';
import { CardsService } from './cards.service';
import { ColumnCardsService } from './column-cards.service';

@Module({
  imports: [ColumnsModule, TypeOrmModule.forFeature([Card])],
  controllers: [CardsController, ColumnCardsController],
  providers: [CardsService, ColumnCardsService],
  exports: [CardsService, ColumnCardsService],
})
export class CardsModule {}
