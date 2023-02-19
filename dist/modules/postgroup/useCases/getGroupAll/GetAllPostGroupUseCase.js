"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetAllPostGroupUseCase = void 0;
var _client = require("../../../../prisma/client");
class GetAllPostGroupUseCase {
  async execute() {
    const post_group = await _client.prisma.post_Group.findMany({
      include: {
        group: {
          select: {
            id: true,
            name_group: true,
            color_hex: true,
            description: true
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
    return post_group;
  }
}
exports.GetAllPostGroupUseCase = GetAllPostGroupUseCase;