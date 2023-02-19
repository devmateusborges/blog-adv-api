"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreatePostGroupController = void 0;
var _CreatePostGroupUseCase = require("./CreatePostGroupUseCase");
class CreatePostGroupController {
  async handle(req, res) {
    const {
      postId,
      groupId
    } = req.body;
    const createPostGroupUseCase = new _CreatePostGroupUseCase.CreatePostGroupUseCase();
    await createPostGroupUseCase.execute({
      postId,
      groupId
    });
    return res.status(201).send();
  }
}
exports.CreatePostGroupController = CreatePostGroupController;