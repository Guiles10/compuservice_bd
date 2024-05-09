"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Responsible = void 0;
const crypto_1 = require("crypto");
class Responsible {
    constructor(data) {
        this.id = data?.id || (0, crypto_1.randomUUID)();
        this.email = data?.email || null;
        this.phone = data?.phone || null;
    }
}
exports.Responsible = Responsible;
//# sourceMappingURL=responsible.entity.js.map