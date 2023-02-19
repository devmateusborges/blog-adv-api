"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetAllUserPostUseCase = void 0;
var _client = require("../../../../prisma/client");
class GetAllUserPostUseCase {
  async execute() {
    const user_post = await _client.prisma.user_Post.findMany({
      include: {
        user: {
          select: {
            id: true,
            email: true,
            name: true
          }
        },
        post: {
          select: {
            id: true,
            date_post: true,
            title: true,
            subject: true,
            url_photo: true,
            subtitle: true
          }
        }
      }
    });
    return user_post;
  }
}
exports.GetAllUserPostUseCase = GetAllUserPostUseCase;