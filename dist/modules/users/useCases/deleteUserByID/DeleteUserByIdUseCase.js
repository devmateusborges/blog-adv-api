"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteUserByIdUseCase = void 0;
var _AppError = require("../../../../errors/AppError");
var _client = require("../../../../prisma/client");
class DeleteUserByIdUseCase {
  async execute(id) {
    // Verificar se o filme já existe
    const userAlreadyExists = await _client.prisma.user.delete({
      where: id
    });
    if (!userAlreadyExists) {
      throw new _AppError.AppError("user Not exists!");
    }
  }
}
exports.DeleteUserByIdUseCase = DeleteUserByIdUseCase;