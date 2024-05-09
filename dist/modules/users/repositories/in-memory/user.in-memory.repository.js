"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersInMemoryRepository = void 0;
const class_transformer_1 = require("class-transformer");
const user_entity_1 = require("../../entities/user.entity");
const common_1 = require("@nestjs/common");
let UsersInMemoryRepository = class UsersInMemoryRepository {
    constructor() {
        this.database = [];
    }
    create(data) {
        const newUser = new user_entity_1.User();
        Object.assign(newUser, {
            ...data
        });
        this.database.push(newUser);
        return (0, class_transformer_1.plainToInstance)(user_entity_1.User, newUser);
    }
    findAll() {
        return (0, class_transformer_1.plainToInstance)(user_entity_1.User, this.database);
    }
    findOne(id) {
        const user = this.database.find((user) => user.id == id);
        return (0, class_transformer_1.plainToInstance)(user_entity_1.User, user);
    }
    findByEmail(email) {
        const user = this.database.find((user) => user.email == email);
        return user;
    }
    findByName(name) {
        const user = this.database.find((user) => user.name == name);
        return user;
    }
    update(id, data) {
    }
    delete(id) {
        const userIndex = this.database.findIndex((user) => user.id == id);
        this.database.splice(userIndex, 1);
    }
};
exports.UsersInMemoryRepository = UsersInMemoryRepository;
exports.UsersInMemoryRepository = UsersInMemoryRepository = __decorate([
    (0, common_1.Injectable)()
], UsersInMemoryRepository);
//# sourceMappingURL=user.in-memory.repository.js.map