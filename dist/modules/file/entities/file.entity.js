"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = void 0;
const crypto_1 = require("crypto");
const moment = require("moment");
class File {
    constructor(data) {
        this.id = data?.id || (0, crypto_1.randomUUID)();
        this.updatedAt = data?.updatedAt || moment().format('DD/MM/YYYY HH:mm:ss');
        this.createdAt = data?.createdAt || moment().format('DD/MM/YYYY HH:mm:ss');
    }
}
exports.File = File;
//# sourceMappingURL=file.entity.js.map