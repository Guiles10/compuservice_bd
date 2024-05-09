"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskInMemoryRepository = void 0;
const common_1 = require("@nestjs/common");
const task_entity_1 = require("../../entities/task.entity");
let TaskInMemoryRepository = class TaskInMemoryRepository {
    constructor() {
        this.dataBaseTasks = [];
    }
    create(data, userId) {
        const newCard = new task_entity_1.Task();
        Object.assign(newCard, {
            ...data,
            userId,
        });
        this.dataBaseTasks.push(newCard);
        return newCard;
    }
    findAll() {
        return this.dataBaseTasks;
    }
    findOne(id) {
        const card = this.dataBaseTasks.find((card) => card.id == id);
        return card;
    }
    update(suportCardId, taskId, data) {
    }
    delete(id) {
        const userIndex = this.dataBaseTasks.findIndex((user) => user.id == id);
        this.dataBaseTasks.splice(userIndex, 1);
    }
};
exports.TaskInMemoryRepository = TaskInMemoryRepository;
exports.TaskInMemoryRepository = TaskInMemoryRepository = __decorate([
    (0, common_1.Injectable)()
], TaskInMemoryRepository);
//# sourceMappingURL=tasks.in-memory.repository.js.map