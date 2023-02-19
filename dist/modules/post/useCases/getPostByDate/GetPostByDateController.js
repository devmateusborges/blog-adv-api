"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetPostByDateController = void 0;
var _CountPostUseCase = require("./CountPostUseCase");
var _GetPostByDateUseCase = require("./GetPostByDateUseCase");
class GetPostByDateController {
  async handle(req, res) {
    const {
      pPage,
      pPer_Page
    } = req.params;
    const getPostByDateUseCase = new _GetPostByDateUseCase.GetPostByDateUseCase();
    const getCountPostUseCase = new _CountPostUseCase.GetCountPostUseCase();
    const result = await getPostByDateUseCase.execute(parseInt(pPage), parseInt(pPer_Page));
    const count = await getCountPostUseCase.execute();
    return res.status(200).json({
      code: 200,
      Page: parseInt(pPage),
      Per_Page: parseInt(pPer_Page),
      items: result,
      total_items: count
    });
  }
}
exports.GetPostByDateController = GetPostByDateController;