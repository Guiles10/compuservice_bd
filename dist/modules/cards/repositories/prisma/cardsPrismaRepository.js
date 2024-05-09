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
exports.CardsPrismaRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../../database/prisma.service");
const class_transformer_1 = require("class-transformer");
const moment = require("moment");
const cards_entity_1 = require("../../entities/cards.entity");
let CardsPrismaRepository = class CardsPrismaRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data, userId) {
        const card = new cards_entity_1.Cards();
        Object.assign(card, {
            ...data,
            status: "A Fazer"
        });
        const newCard = await this.prisma.cards.create({
            data: { ...card, userId }
        });
        return (0, class_transformer_1.plainToInstance)(cards_entity_1.Cards, newCard);
    }
    async findByCardTitle(title) {
        const cardTitle = await this.prisma.cards.findUnique({
            where: { title }
        });
        return cardTitle;
    }
    async findAll() {
        const card = await this.prisma.cards.findMany({
            include: {
                tasks: true,
                files: true,
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
        return card;
    }
    async findOne(id) {
        const supCard = await this.prisma.cards.findUnique({
            where: { id },
            include: {
                tasks: true,
                files: true,
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
        return { ...supCard };
    }
    async update(id, data) {
        const supCardIndex = await this.prisma.cards.update({
            where: { id },
            data: {
                ...data,
                updatedAt: moment().format('DD/MM/YYYY HH:mm:ss')
            },
            include: {
                tasks: true,
                files: true,
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
        return supCardIndex;
    }
    async delete(id) {
        await this.prisma.$transaction(async (prisma) => {
            await prisma.task.deleteMany({
                where: { cardsId: id }
            });
            await prisma.cards.delete({
                where: { id }
            });
        });
    }
    async deleteFileFromCard(cardId, fileName) {
        try {
            const card = await this.prisma.cards.findUnique({
                where: { id: cardId },
                include: { files: true }
            });
            if (!card) {
                throw new Error(`Cartão com ID ${cardId} não encontrado.`);
            }
            const deletedFile = card.files.filter(file => file.fileName == fileName);
            const idFile = deletedFile[0].id;
            await this.prisma.file.delete({
                where: { id: idFile }
            });
        }
        catch (error) {
            throw new Error(`Erro ao excluir arquivo do cartão: ${error.message}`);
        }
    }
};
exports.CardsPrismaRepository = CardsPrismaRepository;
exports.CardsPrismaRepository = CardsPrismaRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CardsPrismaRepository);
//# sourceMappingURL=cardsPrismaRepository.js.map