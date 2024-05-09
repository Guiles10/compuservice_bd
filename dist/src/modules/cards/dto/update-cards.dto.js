"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCardsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_cards_dto_1 = require("./create-cards.dto");
class UpdateCardsDto extends (0, swagger_1.PartialType)(create_cards_dto_1.CreateCardsDto) {
}
exports.UpdateCardsDto = UpdateCardsDto;
//# sourceMappingURL=update-cards.dto.js.map