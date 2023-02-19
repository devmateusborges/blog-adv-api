"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreatePostGroupUseCase = void 0;
var _AppError = require("../../../../errors/AppError");
var _client = require("../../../../prisma/client");
class CreatePostGroupUseCase {
  async execute({
    groupId,
    postId
  }) {
    const postAlreadyExists = await _client.prisma.post_Group.findUnique({
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
      throw new _AppError.AppError(`${postAlreadyExists.post.title} is already in a group!`);
    }

    // Criar Post
    const post_group = await _client.prisma.post_Group.create({
      data: {
        groupId,
        postId
      },
      include: {
        group: {
          select: {
            name_group: true
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
exports.CreatePostGroupUseCase = CreatePostGroupUseCase;