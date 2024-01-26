import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { JWTAuthGuard } from '../auth/jwt.auth.guard';
import { CreateCommentsDto } from './dto/create-comments.dto';
import { UpdateCommentsDto } from './dto/update-comments.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post(':id')
  @UseGuards(JWTAuthGuard)
  create(@Body() createCommentsDto: CreateCommentsDto, @Param('id') userId: string,) {
    return this.commentsService.create(createCommentsDto, userId);
  }
  
  @Get('')
  findAll() {
    return this.commentsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') commentId: string) {
    return this.commentsService.findOne(commentId);
  }

  @Patch(':id')
  @UseGuards(JWTAuthGuard)
  update(@Param('id') commentId: string, @Body() updateCommentsDto: UpdateCommentsDto) {
    return this.commentsService.update(commentId, updateCommentsDto);
  }

  @Delete(':id')
  @UseGuards(JWTAuthGuard)
  remove(@Param('id') id: string) {
    return this.commentsService.remove(id);
  }
}
