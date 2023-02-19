"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetAllUserPostController = void 0;
var _GetAllUserPostUseCase = require("./GetAllUserPostUseCase");
class GetAllUserPostController {
  async handle(req, res) {
    const getAllUserPostUseCase = new _GetAllUserPostUseCase.GetAllUserPostUseCase();
    const result = await getAllUserPostUseCase.execute();
    return res.status(200).json({
      status: 200,
      items: result
    });
  }
}
exports.GetAllUserPostController = GetAllUserPostController;