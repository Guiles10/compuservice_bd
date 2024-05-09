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
exports.ResponsiblePrismaRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../../database/prisma.service");
const responsible_entity_1 = require("../../entities/responsible.entity");
let ResponsiblePrismaRepository = class ResponsiblePrismaRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data, clientId) {
        const responsible = new responsible_entity_1.Responsible();
        Object.assign(responsible, {
            ...data,
        });
        const newResponsible = await this.prisma.responsible.create({
            data: { ...responsible, clientId }
        });
        return newResponsible;
    }
    async findAll(suportClientId) {
        const allResponsible = await this.prisma.responsible.findMany({
            where: {
                id: suportClientId,
            },
            include: {
                client: true
            },
        });
        return allResponsible;
    }
    async findOne(id) {
        const responsible = await this.prisma.responsible.findUnique({
            where: { id }
        });
        return responsible;
    }
    async update(clientId, responsibleId, data) {
        const responsibleIndex = await this.prisma.responsible.update({
            where: { id: responsibleId },
            data: {
                ...data,
            },
        });
        return responsibleIndex;
    }
    async delete(id) {
        await this.prisma.responsible.delete({
            where: { id }
        });
    }
};
exports.ResponsiblePrismaRepository = ResponsiblePrismaRepository;
exports.ResponsiblePrismaRepository = ResponsiblePrismaRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ResponsiblePrismaRepository);
//# sourceMappingURL=responsiblePrismaRepository.js.map