"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeletePostByIDUseCase = void 0;
var _AppError = require("../../../../errors/AppError");
var _client = require("../../../../prisma/client");
class DeletePostByIDUseCase {
  async execute(id) {
    const postAlreadyExists = await _client.prisma.post.delete({
      where: id
    });
    if (!postAlreadyExists) {
      throw new _AppError.AppError("Post Not exists!");
    }
  }
}
exports.DeletePostByIDUseCase = DeletePostByIDUseCase;