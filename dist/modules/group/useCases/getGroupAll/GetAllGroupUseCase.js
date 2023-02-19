"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetAllGroupUseCase = void 0;
var _client = require("../../../../prisma/client");
class GetAllGroupUseCase {
  async execute() {
    const group = await _client.prisma.group.findMany({
      include: {
        post_grupo: {
          select: {
            post: {
              select: {
                title: true
              }
            }
          }
        }
      }
    });
    return group;
  }
}
exports.GetAllGroupUseCase = GetAllGroupUseCase;