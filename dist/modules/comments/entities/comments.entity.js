"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comments = void 0;
const crypto_1 = require("crypto");
const moment = require("moment");
class Comments {
    constructor() {
        this.id = (0, crypto_1.randomUUID)();
        this.createdAt = moment().format('DD/MM/YYYY HH:mm:ss');
        this.updatedAt = moment().format('DD/MM/YYYY HH:mm:ss');
    }
}
exports.Comments = Comments;
//# sourceMappingURL=comments.entity.js.map