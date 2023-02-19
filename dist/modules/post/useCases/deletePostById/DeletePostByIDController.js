"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeletePostByIDController = void 0;
var _DeletePostByIDUseCase = require("./DeletePostByIDUseCase");
class DeletePostByIDController {
  async handle(req, res) {
    const {
      id
    } = req.params;
    const deletePostByIDUseCase = new _DeletePostByIDUseCase.DeletePostByIDUseCase();
    console.log(id);
    console.log(typeof id);
    const result = await deletePostByIDUseCase.execute({
      id,
      title: "",
      subject: "",
      subtitle: "",
      date_post: "",
      url_photo: ""
    });
    return res.status(201).send({
      Menssage: "Sucess"
    });
  }
}
exports.DeletePostByIDController = DeletePostByIDController;