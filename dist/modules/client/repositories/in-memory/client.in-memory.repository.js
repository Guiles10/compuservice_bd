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
const client_entity_1 = require("../../entities/client.entity");
let CardsInMemoryRepository = class CardsInMemoryRepository {
    constructor() {
        this.dataBaseClient = [];
    }
    create(data) {
        const client = new client_entity_1.Client();
        Object.assign(client, {
            ...data
        });
        this.dataBaseClient.push(client);
        return client;
    }
    async findByClientCNPJ(cnpj) {
    }
    async findByClientCPF(cpf) {
    }
    async findByClientCompanyName(companyName) {
    }
    async findByClientCodigo(codigo) {
    }
    findAll() {
        return this.dataBaseClient;
    }
    findOne(id) {
        const client = this.dataBaseClient.find((card) => card.id == id);
        return client;
    }
    update(id, data) {
        const clientIndex = this.dataBaseClient.findIndex((client) => client.id === id);
        if (clientIndex !== -1) {
            const updateClient = {
                ...this.dataBaseClient[clientIndex],
                ...data,
            };
            this.dataBaseClient[clientIndex] = updateClient;
            return this.dataBaseClient[clientIndex];
        }
        return null;
    }
    delete(id) {
        const userIndex = this.dataBaseClient.findIndex((user) => user.id == id);
        this.dataBaseClient.splice(userIndex, 1);
    }
};
exports.CardsInMemoryRepository = CardsInMemoryRepository;
exports.CardsInMemoryRepository = CardsInMemoryRepository = __decorate([
    (0, common_1.Injectable)()
], CardsInMemoryRepository);
//# sourceMappingURL=client.in-memory.repository.js.map