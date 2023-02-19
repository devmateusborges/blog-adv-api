"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreatePostController = void 0;
var _CreatePostUseCase = require("./CreatePostUseCase");
class CreatePostController {
  async handle(req, res) {
    const {
      title,
      subject,
      subtitle,
      url_photo,
      date_post
    } = req.body;
    const createPostUseCase = new _CreatePostUseCase.CreatePostUseCase();
    const result = await createPostUseCase.execute({
      title,
      subject,
      subtitle,
      url_photo,
      date_post
    });
    return res.status(201).json(result);
  }
}
exports.CreatePostController = CreatePostController;