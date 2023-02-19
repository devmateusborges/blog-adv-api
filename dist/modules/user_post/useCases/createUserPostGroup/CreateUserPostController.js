"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUserPostController = void 0;
var _CreateUserPostUseCase = require("./CreateUserPostUseCase");
class CreateUserPostController {
  async handle(req, res) {
    const {
      userId,
      postId
    } = req.body;
    const createUserPostUseCase = new _CreateUserPostUseCase.CreateUserPostUseCase();
    const result = await createUserPostUseCase.execute({
      userId,
      postId
    });
    return res.status(201).json(result);
  }
}
exports.CreateUserPostController = CreateUserPostController;