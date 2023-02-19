"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeletePostGroupByIDController = void 0;
var _DeleteGroupByIDUseCase = require("./DeleteGroupByIDUseCase");
class DeletePostGroupByIDController {
  async handle(req, res) {
    const {
      id
    } = req.params;
    const deletePostGroupByIDUseCase = new _DeleteGroupByIDUseCase.DeletePostGroupByIDUseCase();
    const result = await deletePostGroupByIDUseCase.execute({
      id,
      groupId: "",
      postId: ""
    });
    return res.status(201).send({
      Menssage: "Sucess"
    });
  }
}
exports.DeletePostGroupByIDController = DeletePostGroupByIDController;