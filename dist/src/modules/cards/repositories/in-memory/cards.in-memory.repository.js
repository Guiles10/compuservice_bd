"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardsInMemoryRepository = void 0;
const common_1 = require("@nestjs/common");
const cards_entity_1 = require("../../entities/cards.entity");
let CardsInMemoryRepository = class CardsInMemoryRepository {
    constructor() {
        this.dataBaseCard = [];
    }
    create(data, userId) {
        const newCard = new cards_entity_1.Cards();
        Object.assign(newCard, {
            ...data,
            userId,
        });
        this.dataBaseCard.push(newCard);
        return newCard;
    }
    async findByCardTitle(title) {
        return;
    }
    findAll() {
        return this.dataBaseCard;
    }
    findOne(id) {
        const card = this.dataBaseCard.find((card) => card.id == id);
        return card;
    }
    update(id, data) {
        const cardIndex = this.dataBaseCard.findIndex((card) => card.id === id);
        if (cardIndex !== -1) {
            const updatedCard = {
                ...this.dataBaseCard[cardIndex],
                ...data,
            };
            this.dataBaseCard[cardIndex] = updatedCard;
            return this.dataBaseCard[cardIndex];
        }
        return null;
    }
    delete(id) {
        const userIndex = this.dataBaseCard.findIndex((user) => user.id == id);
        this.dataBaseCard.splice(userIndex, 1);
    }
    async deleteFileFromCard(cardId, fileName) {
    }
};
exports.CardsInMemoryRepository = CardsInMemoryRepository;
exports.CardsInMemoryRepository = CardsInMemoryRepository = __decorate([
    (0, common_1.Injectable)()
], CardsInMemoryRepository);
//# sourceMappingURL=cards.in-memory.repository.js.map