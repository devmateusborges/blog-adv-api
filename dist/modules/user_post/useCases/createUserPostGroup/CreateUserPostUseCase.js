"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUserPostUseCase = void 0;
var _AppError = require("../../../../errors/AppError");
var _client = require("../../../../prisma/client");
class CreateUserPostUseCase {
  async execute({
    userId,
    postId
  }) {
    const postAlreadyExists = await _client.prisma.user_Post.findUnique({
      where: {
        postId
      },
      include: {
        post: {
          select: {
            title: true
          }
        }
      }
    });
    if (postAlreadyExists) {
      throw new _AppError.AppError(`${postAlreadyExists.post.title} already belongs to a user !`);
    }

    // Criar Post
    const post_group = await _client.prisma.user_Post.create({
      data: {
        userId,
        postId
      },
      include: {
        user: {
          select: {
            name: true
          }
        },
        post: {
          select: {
            title: true
          }
        }
      }
    });
    return post_group;
  }
}
exports.CreateUserPostUseCase = CreateUserPostUseCase;