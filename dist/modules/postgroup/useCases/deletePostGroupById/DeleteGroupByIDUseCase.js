"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeletePostGroupByIDUseCase = void 0;
var _AppError = require("../../../../errors/AppError");
var _client = require("../../../../prisma/client");
class DeletePostGroupByIDUseCase {
  async execute(id) {
    const groupAlreadyExists = await _client.prisma.post_group.delete({
      where: id
    });
    if (!groupAlreadyExists) {
      throw new _AppError.AppError("Group Not exists!");
    }
  }
}
exports.DeletePostGroupByIDUseCase = DeletePostGroupByIDUseCase;