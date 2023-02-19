"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteGroupByIDController = void 0;
var _DeleteGroupByIDUseCase = require("./DeleteGroupByIDUseCase");
class DeleteGroupByIDController {
  async handle(req, res) {
    const {
      id
    } = req.params;
    const deleteGroupByIDUseCase = new _DeleteGroupByIDUseCase.DeleteGroupByIDUseCase();
    const result = await deleteGroupByIDUseCase.execute({
      id,
      name_group: "",
      description: "",
      color_hex: ""
    });
    return res.status(201).send({
      Menssage: "Sucess"
    });
  }
}
exports.DeleteGroupByIDController = DeleteGroupByIDController;