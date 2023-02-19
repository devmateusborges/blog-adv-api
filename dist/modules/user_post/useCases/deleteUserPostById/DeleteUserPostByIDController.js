"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteUserPostByIDController = void 0;
var _DeleteUserPostByIDUseCase = require("./DeleteUserPostByIDUseCase");
class DeleteUserPostByIDController {
  async handle(req, res) {
    const {
      id
    } = req.params;
    const deleteUserPostByIDUseCase = new _DeleteUserPostByIDUseCase.DeleteUserPostByIDUseCase();
    const result = await deleteUserPostByIDUseCase.execute({
      id,
      userId: "",
      postId: ""
    });
    return res.status(201).send({
      Menssage: "Sucess"
    });
  }
}
exports.DeleteUserPostByIDController = DeleteUserPostByIDController;