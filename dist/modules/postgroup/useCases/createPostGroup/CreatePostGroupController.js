"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreatePostGroupController = void 0;
var _CreatePostGroupUseCase = require("./CreatePostGroupUseCase");
class CreatePostGroupController {
  async handle(req, res) {
    const {
      groupId,
      postId
    } = req.body;
    const createPostGroupUseCase = new _CreatePostGroupUseCase.CreatePostGroupUseCase();
    const result = await createPostGroupUseCase.execute({
      groupId,
      postId
    });
    return res.status(201).json(result);
  }
}
exports.CreatePostGroupController = CreatePostGroupController;