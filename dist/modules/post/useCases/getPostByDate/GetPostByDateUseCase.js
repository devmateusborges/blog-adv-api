"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetPostByDateUseCase = void 0;
var _client = require("../../../../prisma/client");
class GetPostByDateUseCase {
  async execute(pPage, pPerPage) {
    const countPost = await _client.prisma.post.count();
    const posts = await _client.prisma.post.findMany({
      skip: pPage,
      take: pPerPage,
      orderBy: {
        date_post: "asc"
      },
      include: {
        user_post: {
          select: {
            user: {
              select: {
                name: true
              }
            }
          }
        },
        post_grupo: {
          select: {
            group: {
              select: {
                name_group: true,
                description: true
              }
            }
          }
        }
      }
    });
    return posts;
  }
}
exports.GetPostByDateUseCase = GetPostByDateUseCase;