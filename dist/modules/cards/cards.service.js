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
exports.CardsService = void 0;
const common_1 = require("@nestjs/common");
const cards_repository_1 = require("./repositories/cards.repository");
let CardsService = class CardsService {
    constructor(cardRepository) {
        this.cardRepository = cardRepository;
    }
    async create(createCardsDto, userId) {
        const existingCard = await this.cardRepository.findByCardTitle(createCardsDto.title);
        if (existingCard) {
            throw new common_1.NotAcceptableException("Um cartão com este nome já existe.");
        }
        const suportCard = await this.cardRepository.create(createCardsDto, userId);
        return suportCard;
    }
    async findByCardTitle(title) {
        const cardTitle = await this.cardRepository.findByCardTitle(title);
        return cardTitle;
    }
    async findAll() {
        return this.cardRepository.findAll();
    }
    async findOne(id) {
        const findSupCard = await this.cardRepository.findOne(id);
        if (!findSupCard) {
            throw new common_1.NotAcceptableException("Card não encontrado!");
        }
        return findSupCard;
    }
    async update(id, updateCardsDto) {
        const existingTitle = await this.cardRepository.findOne(id);
        if (!existingTitle) {
            throw new common_1.NotFoundException('Cliente não encontrado');
        }
        if (updateCardsDto.title && updateCardsDto.title !== existingTitle.title) {
            const userWithSameName = await this.cardRepository.findByCardTitle(updateCardsDto.title);
            if (userWithSameName && userWithSameName.id !== id) {
                throw new common_1.ConflictException('Nome já está em uso!!!');
            }
        }
        const supCard = await this.cardRepository.update(id, updateCardsDto);
        return supCard;
    }
    async remove(id) {
        const supCard = await this.cardRepository.findOne(id);
        if (!supCard) {
            throw new common_1.NotAcceptableException("Card não encontrado!");
        }
        await this.cardRepository.delete(id);
        return;
    }
    async deleteFileFromCard(cardId, fileName) {
        return await this.cardRepository.deleteFileFromCard(cardId, fileName);
    }
};
exports.CardsService = CardsService;
exports.CardsService = CardsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cards_repository_1.CardsRepository])
], CardsService);
//# sourceMappingURL=cards.service.js.map