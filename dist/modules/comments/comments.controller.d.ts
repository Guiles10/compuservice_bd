import { CommentsService } from './comments.service';
import { CreateCommentsDto } from './dto/create-comments.dto';
import { UpdateCommentsDto } from './dto/update-comments.dto';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    create(createCommentsDto: CreateCommentsDto, userId: string): Promise<import("./entities/comments.entity").Comments>;
    findAll(): Promise<import("./entities/comments.entity").Comments | import("./entities/comments.entity").Comments[]>;
    findOne(commentId: string): Promise<import("./entities/comments.entity").Comments>;
    update(commentId: string, updateCommentsDto: UpdateCommentsDto): Promise<import("./entities/comments.entity").Comments>;
    remove(id: string): Promise<void>;
}
