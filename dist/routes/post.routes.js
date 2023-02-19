"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postRoutes = void 0;
var _express = require("express");
var _CreatePostController = require("../modules/post/useCases/createPost/CreatePostController");
var _DeletePostByIDController = require("../modules/post/useCases/deletePostById/DeletePostByIDController");
var _GetPostByDateController = require("../modules/post/useCases/getPostByDate/GetPostByDateController");
const createPostController = new _CreatePostController.CreatePostController();
const getPostByDateController = new _GetPostByDateController.GetPostByDateController();
const deletePostByIDController = new _DeletePostByIDController.DeletePostByIDController();
const postRoutes = (0, _express.Router)();
exports.postRoutes = postRoutes;
postRoutes.post("/", createPostController.handle);
postRoutes.get("/Ppage=:pPage&pPer_page=:pPer_Page", getPostByDateController.handle);
postRoutes.delete("/:id", deletePostByIDController.handle);