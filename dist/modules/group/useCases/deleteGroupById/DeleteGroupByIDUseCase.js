"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteGroupByIDUseCase = void 0;
var _AppError = require("../../../../errors/AppError");
var _client = require("../../../../prisma/client");
class DeleteGroupByIDUseCase {
  async execute(id) {
    const groupAlreadyExists = await _client.prisma.group.delete({
      where: id
    });
    if (!groupAlreadyExists) {
      throw new _AppError.AppError("Group Not exists!");
    }
  }
}
exports.DeleteGroupByIDUseCase = DeleteGroupByIDUseCase;