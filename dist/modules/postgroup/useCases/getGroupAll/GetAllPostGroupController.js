"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetAllPostGroupController = void 0;
var _GetAllPostGroupUseCase = require("./GetAllPostGroupUseCase");
class GetAllPostGroupController {
  async handle(req, res) {
    const getAllPostGroupUseCase = new _GetAllPostGroupUseCase.GetAllPostGroupUseCase();
    const result = await getAllPostGroupUseCase.execute();
    return res.status(200).json({
      status: 200,
      items: result
    });
  }
}
exports.GetAllPostGroupController = GetAllPostGroupController;