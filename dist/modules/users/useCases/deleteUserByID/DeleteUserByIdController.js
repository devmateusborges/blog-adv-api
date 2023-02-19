"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteUserByIdController = void 0;
var _DeleteUserByIdUseCase = require("./DeleteUserByIdUseCase");
class DeleteUserByIdController {
  async handle(req, res) {
    const {
      id
    } = req.params;
    const deleteUserByIdUseCase = new _DeleteUserByIdUseCase.DeleteUserByIdUseCase();
    const result = await deleteUserByIdUseCase.execute({
      id,
      name: "",
      email: ""
    });
    return res.status(201).send({
      status: 201,
      items: result
    });
  }
}
exports.DeleteUserByIdController = DeleteUserByIdController;