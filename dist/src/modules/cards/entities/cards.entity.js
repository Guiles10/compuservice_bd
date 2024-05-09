"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cards = void 0;
const crypto_1 = require("crypto");
const moment = require("moment");
class Cards {
    constructor(data) {
        this.id = data?.id || (0, crypto_1.randomUUID)();
        this.description = data?.description || null;
        this.solution = data?.solution || null;
        this.createdAt = data?.createdAt || moment().format('DD/MM/YYYY HH:mm:ss');
        this.updatedAt = data?.updatedAt || moment().format('DD/MM/YYYY HH:mm:ss');
        this.deleteAt = data?.deleteAt || null;
        this.type = data?.type || [];
        this.clients = data?.clients || [];
        this.worker = data?.worker || [];
    }
}
exports.Cards = Cards;
//# sourceMappingURL=cards.entity.js.map