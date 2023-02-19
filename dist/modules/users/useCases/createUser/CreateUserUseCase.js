"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUserUseCase = void 0;
var _AppError = require("../../../../errors/AppError");
var _client = require("../../../../prisma/client");
class CreateUserUseCase {
  async execute({
    name,
    email
  }) {
    // Verificar se o usuário já existe
    const userAlreadyExists = await _client.prisma.user.findUnique({
      where: {
        email
      }
    });
    if (userAlreadyExists) {
      throw new _AppError.AppError("User already exists!");
    }

    // Criar o usuário
    const user = await _client.prisma.user.create({
      data: {
        name,
        email
      }
    });
    return user;
  }
}
exports.CreateUserUseCase = CreateUserUseCase;