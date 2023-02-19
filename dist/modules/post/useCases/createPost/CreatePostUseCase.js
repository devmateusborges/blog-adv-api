"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreatePostUseCase = void 0;
var _AppError = require("../../../../errors/AppError");
var _client = require("../../../../prisma/client");
class CreatePostUseCase {
  async execute({
    title,
    subtitle,
    subject,
    url_photo,
    date_post
  }) {
    // Verificar se Post
    const postAlreadyExists = await _client.prisma.post.findUnique({
      where: {
        title
      }
    });
    if (postAlreadyExists) {
      throw new _AppError.AppError("Post already exists!");
    }

    // Criar Post
    const post = await _client.prisma.post.create({
      data: {
        title,
        subtitle,
        subject,
        url_photo,
        date_post
      }
    });
    return post;
  }
}
exports.CreatePostUseCase = CreatePostUseCase;