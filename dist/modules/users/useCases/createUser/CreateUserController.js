"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUserController = void 0;
var _CreateUserUseCase = require("./CreateUserUseCase");
class CreateUserController {
  async handle(req, res) {
    const {
      id,
      name,
      email
    } = req.body;
    const createUserUseCase = new _CreateUserUseCase.CreateUserUseCase();
    const result = await createUserUseCase.execute({
      id,
      name,
      email
    });
    return res.status(201).json({
      status: 201,
      items: result
    });
  }
}
exports.CreateUserController = CreateUserController;