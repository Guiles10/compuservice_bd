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
exports.ResponsibleService = void 0;
const common_1 = require("@nestjs/common");
const responsible_repository_1 = require("./repositories/responsible.repository");
let ResponsibleService = class ResponsibleService {
    constructor(responsibleRepository) {
        this.responsibleRepository = responsibleRepository;
    }
    async create(createResponsibleDto, clientId) {
        const responsible = await this.responsibleRepository.create(createResponsibleDto, clientId);
        return responsible;
    }
    async findAll(clientId) {
        return this.responsibleRepository.findAll(clientId);
    }
    async findOne(id) {
        const findResponsible = await this.responsibleRepository.findOne(id);
        if (!findResponsible) {
        }
        return findResponsible;
    }
    async update(suportClientId, responsibleId, updateResponsibleDto) {
        const responsible = await this.responsibleRepository.update(suportClientId, responsibleId, updateResponsibleDto);
        if (!responsible) {
            throw new common_1.NotAcceptableException("Responsible Not Found!");
        }
        return responsible;
    }
    async remove(id) {
        const responsible = await this.responsibleRepository.findOne(id);
        if (!responsible) {
            throw new common_1.NotAcceptableException("Responsible Not Found!");
        }
        await this.responsibleRepository.delete(id);
        return;
    }
};
exports.ResponsibleService = ResponsibleService;
exports.ResponsibleService = ResponsibleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [responsible_repository_1.ResponsibleRepository])
], ResponsibleService);
//# sourceMappingURL=responsible.service.js.map