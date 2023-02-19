"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetAllGroupController = void 0;
var _GetAllGroupUseCase = require("./GetAllGroupUseCase");
class GetAllGroupController {
  async handle(req, res) {
    const getAllGroupUseCase = new _GetAllGroupUseCase.GetAllGroupUseCase();
    const result = await getAllGroupUseCase.execute();
    return res.status(200).json({
      status: 200,
      items: result
    });
  }
}
exports.GetAllGroupController = GetAllGroupController;