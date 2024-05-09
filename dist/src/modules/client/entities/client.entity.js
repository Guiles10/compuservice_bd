"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const crypto_1 = require("crypto");
class Client {
    constructor(data) {
        this.id = (0, crypto_1.randomUUID)();
        this.codigo = data?.codigo || null;
        this.socialName = data?.socialName || null;
        this.cnpj = data?.cnpj || null;
        this.cpf = data?.cpf || null;
        this.businessPhone_1 = data?.businessPhone_1 || null;
        this.businessPhone_2 = data?.businessPhone_2 || null;
        this.businessEmail = data?.businessEmail || null;
        this.site = data?.site || null;
        this.comment = data?.comment || null;
        this.cep = data?.cep || null;
        this.state = data?.state || null;
        this.city = data?.city || null;
        this.street = data?.street || null;
        this.neighborhood = data?.neighborhood || null;
        this.number = data?.number || null;
    }
}
exports.Client = Client;
//# sourceMappingURL=client.entity.js.map