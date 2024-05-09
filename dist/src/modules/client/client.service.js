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
exports.ClientService = void 0;
const common_1 = require("@nestjs/common");
const client_repository_1 = require("./repositories/client.repository");
let ClientService = class ClientService {
    constructor(clientRepository) {
        this.clientRepository = clientRepository;
    }
    async create(createClientDto) {
        if (await this.clientRepository.findByClientCNPJ(createClientDto.cnpj)) {
            throw new common_1.NotAcceptableException("CNPJ já cadastrado");
        }
        if (await this.clientRepository.findByClientCPF(createClientDto.cpf)) {
            throw new common_1.NotAcceptableException("CPF já cadastrado");
        }
        if (await this.clientRepository.findByClientCompanyName(createClientDto.companyName)) {
            throw new common_1.NotAcceptableException("Razão Social já cadastrado");
        }
        if (await this.clientRepository.findByClientCodigo(createClientDto.codigo)) {
            throw new common_1.NotAcceptableException("Código já cadastrado");
        }
        const client = await this.clientRepository.create(createClientDto);
        return client;
    }
    async findByClientCNPJ(cnpj) {
        if (cnpj === null) {
            return null;
        }
        return await this.clientRepository.findByClientCNPJ(cnpj);
    }
    async findByClientCPF(cpf) {
        if (cpf === null) {
            return null;
        }
        return await this.clientRepository.findByClientCPF(cpf);
    }
    async findByClientCompanyName(companyName) {
        return await this.clientRepository.findByClientCompanyName(companyName);
    }
    async findByClientCodigo(codigo) {
        return await this.clientRepository.findByClientCodigo(codigo);
    }
    async findAll() {
        return this.clientRepository.findAll();
    }
    async findOne(id) {
        const findClient = await this.clientRepository.findOne(id);
        if (!findClient) {
            throw new common_1.NotAcceptableException("Client não encontrado!");
        }
        return findClient;
    }
    async update(id, updateClientDto) {
        const existingClient = await this.clientRepository.findOne(id);
        if (!existingClient) {
            throw new common_1.NotFoundException('Usuario não encontrado');
        }
        if (updateClientDto.cnpj && updateClientDto.cnpj !== existingClient.cnpj) {
            const clientWithSameCNPJ = await this.clientRepository.findByClientCNPJ(updateClientDto.cnpj);
            if (clientWithSameCNPJ && clientWithSameCNPJ.id !== id) {
                throw new common_1.ConflictException('CNPJ já está em uso!');
            }
        }
        if (updateClientDto.companyName && updateClientDto.companyName !== existingClient.companyName) {
            const clientWithSameCompanyName = await this.clientRepository.findByClientCompanyName(updateClientDto.companyName);
            if (clientWithSameCompanyName && clientWithSameCompanyName.id !== id) {
                throw new common_1.ConflictException('E-mail já está em uso!');
            }
        }
        if (updateClientDto.codigo && updateClientDto.codigo !== existingClient.codigo) {
            const clientWithSameCodigo = await this.clientRepository.findByClientCodigo(updateClientDto.codigo);
            if (clientWithSameCodigo && clientWithSameCodigo.id !== id) {
                throw new common_1.ConflictException('Código já está em uso!');
            }
        }
        const client = await this.clientRepository.update(id, updateClientDto);
        return client;
    }
    async remove(id) {
        const client = await this.clientRepository.findOne(id);
        if (!client) {
            throw new common_1.NotAcceptableException("Client não encontrado!");
        }
        await this.clientRepository.delete(id);
        return;
    }
};
exports.ClientService = ClientService;
exports.ClientService = ClientService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [client_repository_1.ClientRepository])
], ClientService);
//# sourceMappingURL=client.service.js.map