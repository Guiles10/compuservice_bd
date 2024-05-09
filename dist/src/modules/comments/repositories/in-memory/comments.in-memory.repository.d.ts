import { CommentsRepository } from '../comments.repository';
import { CreateCommentsDto } from '../../dto/create-comments.dto';
import { Comments } from '../../entities/comments.entity';
import { UpdateCommentsDto } from '../../dto/update-comments.dto';
export declare class CommentsInMemoryRepository implements CommentsRepository {
    private dataBaseComment;
    create(data: CreateCommentsDto, userId: string): Comments | Promise<Comments>;
    findByCommentTitle(title: string): Promise<any>;
    findAll(): any | Promise<any>;
    findOne(id: string): Comments | Promise<Comments>;
    update(id: string, data: UpdateCommentsDto): Comments | Promise<Comments>;
    delete(id: string): void | Promise<void>;
}
