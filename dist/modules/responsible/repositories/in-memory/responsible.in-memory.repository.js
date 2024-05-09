"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponsibleInMemoryRepository = void 0;
const common_1 = require("@nestjs/common");
const responsible_entity_1 = require("../../entities/responsible.entity");
let ResponsibleInMemoryRepository = class ResponsibleInMemoryRepository {
    constructor() {
        this.dataBaseResponsible = [];
    }
    create(data, userId) {
        const newResponsible = new responsible_entity_1.Responsible();
        Object.assign(newResponsible, {
            ...data,
        });
        this.dataBaseResponsible.push(newResponsible);
        return newResponsible;
    }
    findAll() {
        return this.dataBaseResponsible;
    }
    findOne(id) {
        const responsible = this.dataBaseResponsible.find((card) => card.id == id);
        return responsible;
    }
    update(clientId, responsibleId, data) {
    }
    delete(id) {
        const userIndex = this.dataBaseResponsible.findIndex((user) => user.id == id);
        this.dataBaseResponsible.splice(userIndex, 1);
    }
};
exports.ResponsibleInMemoryRepository = ResponsibleInMemoryRepository;
exports.ResponsibleInMemoryRepository = ResponsibleInMemoryRepository = __decorate([
    (0, common_1.Injectable)()
], ResponsibleInMemoryRepository);
//# sourceMappingURL=responsible.in-memory.repository.js.map