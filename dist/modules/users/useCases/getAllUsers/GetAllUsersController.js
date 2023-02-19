"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetAllUsersController = void 0;
var _GetAllUsersUseCase = require("./GetAllUsersUseCase");
class GetAllUsersController {
  async handle(req, res) {
    const getAllUsersUseCase = new _GetAllUsersUseCase.GetAllUsersUseCase();
    const result = await getAllUsersUseCase.execute();
    return res.status(200).json({
      status: 200,
      items: result
    });
  }
}
exports.GetAllUsersController = GetAllUsersController;