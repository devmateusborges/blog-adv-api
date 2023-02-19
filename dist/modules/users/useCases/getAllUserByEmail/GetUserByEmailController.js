"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetUserByEmailController = void 0;
var _GetUserByEmailUseCase = require("./GetUserByEmailUseCase");
class GetUserByEmailController {
  async handle(req, res) {
    const {
      email
    } = req.params;
    const getUserByEmailUseCase = new _GetUserByEmailUseCase.GetUserByEmailUseCase();
    const result = await getUserByEmailUseCase.execute(email);
    return res.status(200).json({
      status: 200,
      items: result
    });
  }
}
exports.GetUserByEmailController = GetUserByEmailController;