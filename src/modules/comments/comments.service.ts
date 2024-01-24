import { Injectable, NotAcceptableException } from '@nestjs/common';
import { CommentsRepository } from './repositories/comments.repository';
import { CreateCommentsDto } from './dto/create-comments.dto';
import { UpdateCommentsDto } from './dto/update-comments.dto';

@Injectable()
export class CommentsService {
    constructor(private commentsRepository: CommentsRepository){}

    async create(createCommentsDto: CreateCommentsDto, userId: string) {
        const comment =  await this.commentsRepository.create(createCommentsDto, userId)
        if(!comment){
            throw new NotAcceptableException("Comment Not Found!")
        }
        return comment
    }

    async findAll() {
        return this.commentsRepository.findAll()
    }

    async findOne(id: string) {
        const findComment =  await this.commentsRepository.findOne(id)
        if(!findComment){
            throw new NotAcceptableException("Comment Not Found!")
        }
        return findComment
    }

    async update(id: string, updateCommentsDto: UpdateCommentsDto) {
    const comment = await this.commentsRepository.update(id, updateCommentsDto)
    if(!comment){
        throw new NotAcceptableException("Comment Not Found!")
    }
    return comment
    }

    async remove(id: string) {
        const comment = await this.commentsRepository.findOne(id)
        if(!comment){
            throw new NotAcceptableException("Comment Not Found!")
        }
        await this.commentsRepository.delete(id)
        return
    }
}
