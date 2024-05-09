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
exports.CommentsPrismaRepository = void 0;
const common_1 = require("@nestjs/common");
const comments_entity_1 = require("../../entities/comments.entity");
const prisma_service_1 = require("../../../../database/prisma.service");
const moment = require("moment");
let CommentsPrismaRepository = class CommentsPrismaRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data, userId) {
        const comment = new comments_entity_1.Comments();
        console.log(data);
        Object.assign(comment, {
            ...data,
        });
        const newComment = await this.prisma.comment.create({
            data: { ...comment, userId }
        });
        return newComment;
    }
    async findByCommentTitle(title) {
        const clientCompName = await this.prisma.comment.findUnique({
            where: { title }
        });
        return clientCompName;
    }
    async findAll() {
        const comments = await this.prisma.comment.findMany({
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        function: true,
                        isAdmin: true,
                    },
                },
            },
        });
        return comments;
    }
    async findOne(id) {
        const supCard = await this.prisma.comment.findUnique({
            where: { id },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        function: true,
                        isAdmin: true,
                    },
                }
            },
        });
        return supCard;
    }
    async update(id, data) {
        const supCardIndex = await this.prisma.comment.update({
            where: { id },
            data: {
                ...data,
                updatedAt: moment().format('DD/MM/YYYY HH:mm:ss')
            },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        function: true,
                        isAdmin: true,
                    },
                }
            },
        });
        return supCardIndex;
    }
    async delete(id) {
        await this.prisma.comment.delete({
            where: { id }
        });
    }
};
exports.CommentsPrismaRepository = CommentsPrismaRepository;
exports.CommentsPrismaRepository = CommentsPrismaRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CommentsPrismaRepository);
//# sourceMappingURL=commentsPrismaRepository.js.map