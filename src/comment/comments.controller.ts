import { Param, UseGuards } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import {
  Crud,
  CrudController,
  CrudRequest,
  Override,
  ParsedBody,
  ParsedRequest,
} from '@nestjsx/crud';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Comment } from './comment.entity';
import { CommentOwnerGuard } from './comment-owner.guard';
import { CommentsService } from './comments.service';

@Crud({
  model: {
    type: Comment,
  },
  routes: {
    deleteOneBase: {
      decorators: [UseGuards(CommentOwnerGuard)],
    },
  },
})
@UseGuards(JwtAuthGuard)
@Controller('comments')
export class CommentController implements CrudController<Comment> {
  constructor(public service: CommentsService) {}
}
