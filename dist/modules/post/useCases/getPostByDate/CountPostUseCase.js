"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetCountPostUseCase = void 0;
var _client = require("../../../../prisma/client");
class GetCountPostUseCase {
  async execute() {
    const countPost = await _client.prisma.post.count();
    return countPost;
  }
}
exports.GetCountPostUseCase = GetCountPostUseCase;