"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const comments_repository_1 = require("./repositories/comments.repository");
let CommentsService = class CommentsService {
    constructor(commentsRepository) {
        this.commentsRepository = commentsRepository;
    }
    async create(createCommentsDto, userId) {
        const comment = await this.commentsRepository.create(createCommentsDto, userId);
        if (!comment) {
            throw new common_1.NotAcceptableException("Comentario não encontrado!");
        }
        return comment;
    }
    async findByCommentTitle(title) {
        return await this.commentsRepository.findByCommentTitle(title);
    }
    async findAll() {
        return this.commentsRepository.findAll();
    }
    async findOne(id) {
        const findComment = await this.commentsRepository.findOne(id);
        if (!findComment) {
            throw new common_1.NotAcceptableException("Comentario não encontrado!");
        }
        return findComment;
    }
    async update(id, updateCommentsDto) {
        const comment = await this.commentsRepository.update(id, updateCommentsDto);
        if (!comment) {
            throw new common_1.NotAcceptableException("Comentario não encontrado!");
        }
        return comment;
    }
    async remove(id) {
        const comment = await this.commentsRepository.findOne(id);
        if (!comment) {
            throw new common_1.NotAcceptableException("Comentario não encontrado!");
        }
        await this.commentsRepository.delete(id);
        return;
    }
};
exports.CommentsService = CommentsService;
exports.CommentsService = CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [comments_repository_1.CommentsRepository])
], CommentsService);
//# sourceMappingURL=comments.service.js.map