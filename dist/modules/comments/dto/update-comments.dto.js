"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCommentsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_comments_dto_1 = require("./create-comments.dto");
class UpdateCommentsDto extends (0, swagger_1.PartialType)(create_comments_dto_1.CreateCommentsDto) {
}
exports.UpdateCommentsDto = UpdateCommentsDto;
//# sourceMappingURL=update-comments.dto.js.map