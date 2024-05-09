"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsInMemoryRepository = void 0;
const common_1 = require("@nestjs/common");
const comments_entity_1 = require("../../entities/comments.entity");
let CommentsInMemoryRepository = class CommentsInMemoryRepository {
    constructor() {
        this.dataBaseComment = [];
    }
    create(data, userId) {
        const newCard = new comments_entity_1.Comments();
        Object.assign(newCard, {
            ...data,
            userId,
        });
        this.dataBaseComment.push(newCard);
        return newCard;
    }
    async findByCommentTitle(title) {
    }
    findAll() {
        return this.dataBaseComment;
    }
    findOne(id) {
        const card = this.dataBaseComment.find((card) => card.id == id);
        return card;
    }
    update(id, data) {
        const cardIndex = this.dataBaseComment.findIndex((card) => card.id === id);
        if (cardIndex !== -1) {
            const updatedCard = {
                ...this.dataBaseComment[cardIndex],
                ...data,
            };
            this.dataBaseComment[cardIndex] = updatedCard;
            return this.dataBaseComment[cardIndex];
        }
        return null;
    }
    delete(id) {
        const userIndex = this.dataBaseComment.findIndex((user) => user.id == id);
        this.dataBaseComment.splice(userIndex, 1);
    }
};
exports.CommentsInMemoryRepository = CommentsInMemoryRepository;
exports.CommentsInMemoryRepository = CommentsInMemoryRepository = __decorate([
    (0, common_1.Injectable)()
], CommentsInMemoryRepository);
//# sourceMappingURL=comments.in-memory.repository.js.map