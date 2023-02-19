"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetAllUsersUseCase = void 0;
var _client = require("../../../../prisma/client");
class GetAllUsersUseCase {
  async execute() {
    const users = await _client.prisma.user.findMany({
      include: {
        user_post: {
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
    return users;
  }
}
exports.GetAllUsersUseCase = GetAllUsersUseCase;