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
exports.CreateCardsDto = exports.UserFunction = void 0;
const class_validator_1 = require("class-validator");
var CardPriority;
(function (CardPriority) {
    CardPriority["PRIORIDADE01"] = "Muito Urgente";
    CardPriority["PRIORIDADE02"] = "Urgente";
    CardPriority["PRIORIDADE03"] = "Normal";
    CardPriority["PRIORIDADE04"] = "Basica";
})(CardPriority || (CardPriority = {}));
var CardStatus;
(function (CardStatus) {
    CardStatus["TODO"] = "A Fazer";
    CardStatus["IN_PROGRESS"] = "Em Andamento";
    CardStatus["DONE"] = "Concluido";
})(CardStatus || (CardStatus = {}));
var UserFunction;
(function (UserFunction) {
    UserFunction["ATENDIMENTO"] = "Atendimento";
    UserFunction["SUPORTE"] = "Suporte";
    UserFunction["PROGRAMACAO"] = "Programa\u00E7\u00E3o";
    UserFunction["FATURAMENTO"] = "Faturamento";
    UserFunction["SUPORTEHOSPTAL"] = "Suporte Hospital";
    UserFunction["INSTALACAO"] = "Instala\u00E7\u00E3o";
})(UserFunction || (exports.UserFunction = UserFunction = {}));
class CreateCardsDto {
}
exports.CreateCardsDto = CreateCardsDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCardsDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCardsDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCardsDto.prototype, "solution", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(CardPriority, { message: "Prioridade inválida" }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCardsDto.prototype, "priority", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(CardStatus, { message: "Status inválido" }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCardsDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Escolha pelo menos uma atividade" }),
    (0, class_validator_1.IsIn)(Object.values(UserFunction), { each: true }),
    __metadata("design:type", Array)
], CreateCardsDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateCardsDto.prototype, "clients", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateCardsDto.prototype, "worker", void 0);
//# sourceMappingURL=create-cards.dto.js.map