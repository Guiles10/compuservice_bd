"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponsibleModule = void 0;
const common_1 = require("@nestjs/common");
const responsible_service_1 = require("./responsible.service");
const responsible_controller_1 = require("./responsible.controller");
const prisma_service_1 = require("src/database/prisma.service");
const responsible_repository_1 = require("./repositories/responsible.repository");
const responsiblePrismaRepository_1 = require("./repositories/prisma/responsiblePrismaRepository");
let ResponsibleModule = class ResponsibleModule {
};
exports.ResponsibleModule = ResponsibleModule;
exports.ResponsibleModule = ResponsibleModule = __decorate([
    (0, common_1.Module)({
        controllers: [responsible_controller_1.ResponsibleController],
        providers: [
            responsible_service_1.ResponsibleService,
            prisma_service_1.PrismaService,
            {
                provide: responsible_repository_1.ResponsibleRepository,
                useClass: responsiblePrismaRepository_1.ResponsiblePrismaRepository,
            }
        ],
    })
], ResponsibleModule);
//# sourceMappingURL=responsible.module.js.map