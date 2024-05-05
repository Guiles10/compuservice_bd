
import { Injectable } from '@nestjs/common';
import { CommentsRepository } from '../comments.repository';
import { CreateCommentsDto } from '../../dto/create-comments.dto';
import { Comments } from '../../entities/comments.entity';
import { UpdateCommentsDto } from '../../dto/update-comments.dto';

@Injectable()
export class CommentsInMemoryRepository implements CommentsRepository {

    private dataBaseComment: Comments[] = []

    create(data: CreateCommentsDto, userId: string): Comments | Promise<Comments> {
        const newCard = new Comments()
        Object.assign(newCard, {
           ...data,
           userId,
        })
        this.dataBaseComment.push(newCard)
        return newCard
    }

    async findByCommentTitle(title: string): Promise<any> {
    }

    findAll(): any | Promise<any> {
        return this.dataBaseComment
    }
    
    findOne(id: string): Comments | Promise<Comments> {
        const card = this.dataBaseComment.find((card) => card.id == id)
        return card   
    }

    update(id: string, data: UpdateCommentsDto): Comments | Promise<Comments> {
        const cardIndex = this.dataBaseComment.findIndex((card) => card.id === id);
    
        if (cardIndex !== -1) {
            const updatedCard: any = {
                ...this.dataBaseComment[cardIndex],
                ...data,
            };    
            this.dataBaseComment[cardIndex] = updatedCard;
    
            return this.dataBaseComment[cardIndex];
        }
        return null;
    }
    

    delete(id: string): void | Promise<void> {
        const userIndex = this.dataBaseComment.findIndex((user) => user.id == id)
        this.dataBaseComment.splice(userIndex, 1)
    }

}
