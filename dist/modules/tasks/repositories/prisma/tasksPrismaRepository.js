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
exports.TaskPrismaRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../../database/prisma.service");
const task_entity_1 = require("../../entities/task.entity");
let TaskPrismaRepository = class TaskPrismaRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data, cardsId) {
        const tasks = new task_entity_1.Task();
        Object.assign(tasks, {
            ...data,
            completed: data.completed || false
        });
        const newTasks = await this.prisma.task.create({
            data: { ...tasks, cardsId }
        });
        return newTasks;
    }
    async findAll(suportCardId) {
        const allTasks = await this.prisma.cards.findMany({
            where: {
                id: suportCardId,
            },
            include: {
                tasks: true
            },
        });
        return allTasks;
    }
    async findOne(id) {
        const supCard = await this.prisma.task.findUnique({
            where: { id }
        });
        return supCard;
    }
    async update(cardsId, taskId, data) {
        const taskIndex = await this.prisma.task.update({
            where: { id: taskId },
            data: {
                ...data,
            },
        });
        return taskIndex;
    }
    async delete(id) {
        await this.prisma.task.delete({
            where: { id }
        });
    }
};
exports.TaskPrismaRepository = TaskPrismaRepository;
exports.TaskPrismaRepository = TaskPrismaRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TaskPrismaRepository);
//# sourceMappingURL=tasksPrismaRepository.js.map