"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreatePostGroupUseCase = void 0;
var _AppError = require("../../../../errors/AppError");
var _client = require("../../../../prisma/client");
class CreatePostGroupUseCase {
  async execute({
    postId,
    groupId
  }) {
    // verificar se post
    const postExists = await _client.prisma.post.findUnique({
      where: {
        id: postId
      }
    });
    if (!postExists) {
      throw new _AppError.AppError("post does not exists!");
    }
    const postAlreadyRented = await _client.prisma.post_Group.findFirst({
      where: {
        postId
      }
    });

    // verificar se Grupo existe
    const userExists = await _client.prisma.group.findUnique({
      where: {
        id: groupId
      }
    });
    if (!userExists) {
      throw new _AppError.AppError("User does not exists!");
    }

    // criar Vicular grupo no post
    await _client.prisma.post_Group.create({
      data: {
        postId,
        groupId
      }
    });
  }
}
exports.CreatePostGroupUseCase = CreatePostGroupUseCase;