"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteUserPostByIDUseCase = void 0;
var _AppError = require("../../../../errors/AppError");
var _client = require("../../../../prisma/client");
class DeleteUserPostByIDUseCase {
  async execute(id) {
    const userPostAlreadyExists = await _client.prisma.user_Post.delete({
      where: id
    });
    if (!userPostAlreadyExists) {
      throw new _AppError.AppError("User or Post Not exists!");
    }
  }
}
exports.DeleteUserPostByIDUseCase = DeleteUserPostByIDUseCase;