"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateGroupUseCase = void 0;
var _AppError = require("../../../../errors/AppError");
var _client = require("../../../../prisma/client");
class CreateGroupUseCase {
  async execute({
    name_group,
    description,
    color_hex
  }) {
    // Verificar se Post
    const groupAlreadyExists = await _client.prisma.group.findUnique({
      where: {
        name_group
      }
    });
    if (groupAlreadyExists) {
      throw new _AppError.AppError("Group already exists!");
    }

    // Criar Post
    const group = await _client.prisma.group.create({
      data: {
        name_group,
        description,
        color_hex
      }
    });
    return group;
  }
}
exports.CreateGroupUseCase = CreateGroupUseCase;