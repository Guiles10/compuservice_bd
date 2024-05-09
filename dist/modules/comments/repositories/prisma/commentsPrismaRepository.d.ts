import { CommentsRepository } from '../comments.repository';
import { CreateCommentsDto } from '../../dto/create-comments.dto';
import { Comments } from '../../entities/comments.entity';
import { UpdateCommentsDto } from '../../dto/update-comments.dto';
import { PrismaService } from 'src/database/prisma.service';
export declare class CommentsPrismaRepository implements CommentsRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateCommentsDto, userId: string): Promise<Comments>;
    findByCommentTitle(title: string): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<Comments>;
    update(id: string, data: UpdateCommentsDto): Promise<Comments>;
    delete(id: string): Promise<void>;
}
