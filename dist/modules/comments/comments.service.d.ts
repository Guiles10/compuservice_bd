import { CommentsRepository } from './repositories/comments.repository';
import { CreateCommentsDto } from './dto/create-comments.dto';
import { UpdateCommentsDto } from './dto/update-comments.dto';
export declare class CommentsService {
    private commentsRepository;
    constructor(commentsRepository: CommentsRepository);
    create(createCommentsDto: CreateCommentsDto, userId: string): Promise<import("./entities/comments.entity").Comments>;
    findByCommentTitle(title: string): Promise<import("./entities/comments.entity").Comments>;
    findAll(): Promise<import("./entities/comments.entity").Comments | import("./entities/comments.entity").Comments[]>;
    findOne(id: string): Promise<import("./entities/comments.entity").Comments>;
    update(id: string, updateCommentsDto: UpdateCommentsDto): Promise<import("./entities/comments.entity").Comments>;
    remove(id: string): Promise<void>;
}
