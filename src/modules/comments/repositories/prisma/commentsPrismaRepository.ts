
import { Injectable } from '@nestjs/common';
import { CommentsRepository } from '../comments.repository';
import { CreateCommentsDto } from '../../dto/create-comments.dto';
import { Comments } from '../../entities/comments.entity';
import { UpdateCommentsDto } from '../../dto/update-comments.dto';
import { PrismaService } from 'src/database/prisma.service';
import * as moment from 'moment';

@Injectable()
export class CommentsPrismaRepository implements CommentsRepository {

    constructor(private prisma: PrismaService){} 

    async create(data: CreateCommentsDto, userId: string): Promise<Comments> {
        const comment = new Comments()
        Object.assign(comment, {
            ...data,
        })
        const newComment = await this.prisma.comment.create({
            data: { ...comment, userId }
        })
        return newComment
    }

    async findByCommentTitle(title: string): Promise<any> {
        const clientCompName = await this.prisma.comment.findUnique({
            where: {title}
        })
        return clientCompName
    }

    async findAll(): Promise<any> {
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
        return comments
    }

    async findOne(id: string): Promise<Comments> {
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

    async update(id: string, data: UpdateCommentsDto): Promise<Comments> {
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

    async delete(id: string): Promise<void> {
        await this.prisma.comment.delete({
            where: { id }
        });

    }
}
