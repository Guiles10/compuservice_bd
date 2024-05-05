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
            throw new NotAcceptableException("Comentario não encontrado!")
        }
        return comment
    }

    async findByCommentTitle(title: string) {
        return await this.commentsRepository.findByCommentTitle(title)
    }

    async findAll() {
        return this.commentsRepository.findAll()
    }

    async findOne(id: string) {
        const findComment =  await this.commentsRepository.findOne(id)
        if(!findComment){
            throw new NotAcceptableException("Comentario não encontrado!")
        }
        return findComment
    }

    async update(id: string, updateCommentsDto: UpdateCommentsDto) {
    const comment = await this.commentsRepository.update(id, updateCommentsDto)
    if(!comment){
        throw new NotAcceptableException("Comentario não encontrado!")
    }
    return comment
    }

    async remove(id: string) {
        const comment = await this.commentsRepository.findOne(id)
        if(!comment){
            throw new NotAcceptableException("Comentario não encontrado!")
        }
        await this.commentsRepository.delete(id)
        return
    }
}
