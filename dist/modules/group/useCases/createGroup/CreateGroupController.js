"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateGroupController = void 0;
var _CreateGroupUseCase = require("./CreateGroupUseCase");
class CreateGroupController {
  async handle(req, res) {
    const {
      name_group,
      description,
      color_hex
    } = req.body;
    const createGroupUseCase = new _CreateGroupUseCase.CreateGroupUseCase();
    const result = await createGroupUseCase.execute({
      name_group,
      description,
      color_hex
    });
    return res.status(201).json(result);
  }
}
exports.CreateGroupController = CreateGroupController;