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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("./repositories/user.repository");
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(createUserDto) {
        if (await this.userRepository.findByEmail(createUserDto.email)) {
            throw new common_1.ConflictException("E-mail já está em uso!!!");
        }
        if (await this.userRepository.findByName(createUserDto.name)) {
            throw new common_1.ConflictException("Nome de usuário já está em uso!");
        }
        const user = await this.userRepository.create(createUserDto);
        return user;
    }
    async findByName(name) {
        return await this.userRepository.findByName(name);
    }
    async findByEmail(email) {
        return await this.userRepository.findByEmail(email);
    }
    async findOne(id) {
        const findClient = await this.userRepository.findOne(id);
        if (!findClient) {
            throw new common_1.NotAcceptableException("User não encontrado!");
        }
        return findClient;
    }
    async findAll() {
        const users = await this.userRepository.findAll();
        return users;
    }
    async update(id, updateUserDto) {
        const existingUser = await this.userRepository.findOne(id);
        if (!existingUser) {
            throw new common_1.NotFoundException('Cliente não encontrado');
        }
        if (updateUserDto.name && updateUserDto.name !== existingUser.name) {
            const userWithSameName = await this.userRepository.findByName(updateUserDto.name);
            if (userWithSameName && userWithSameName.id !== id) {
                throw new common_1.ConflictException('Nome já está em uso!!!');
            }
        }
        if (updateUserDto.email && updateUserDto.email !== existingUser.email) {
            const userWithSameEmail = await this.userRepository.findByEmail(updateUserDto.email);
            if (userWithSameEmail && userWithSameEmail.id !== id) {
                throw new common_1.ConflictException('E-mail já está em uso!!!');
            }
        }
        const user = await this.userRepository.update(id, updateUserDto);
        return user;
    }
    async remove(id) {
        const user = await this.userRepository.findOne(id);
        if (!user) {
            throw new common_1.NotAcceptableException("Usuário não encontrado!");
        }
        await this.userRepository.delete(id);
        return;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UsersRepository])
], UsersService);
//# sourceMappingURL=users.service.js.map