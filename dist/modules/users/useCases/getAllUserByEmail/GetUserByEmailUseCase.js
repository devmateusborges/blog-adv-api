"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetUserByEmailUseCase = void 0;
var _AppError = require("../../../../errors/AppError");
var _client = require("../../../../prisma/client");
class GetUserByEmailUseCase {
  async execute(email) {
    const users = await _client.prisma.user.findUnique({
      where: {
        email
      }
    });
    if (!users) {
      throw new _AppError.AppError("user Not exists!");
    }
    return users;
  }
}
exports.GetUserByEmailUseCase = GetUserByEmailUseCase;