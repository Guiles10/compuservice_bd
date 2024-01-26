import { CreateCommentsDto } from "../dto/create-comments.dto";
import { UpdateCommentsDto } from "../dto/update-comments.dto";
import { Comments } from "../entities/comments.entity";


export abstract class CommentsRepository {
    abstract create(data: CreateCommentsDto, userId: string): Promise<Comments> | Comments;
    abstract findAll(): Promise<Comments> | undefined | Comments[];
    abstract findOne(id: string): Promise<Comments> | Comments;
    abstract update(id: string, data: UpdateCommentsDto): Promise<Comments> | Comments;
    abstract delete(id: string): Promise<void> | void; 
}

