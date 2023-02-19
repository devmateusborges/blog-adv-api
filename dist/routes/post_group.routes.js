"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postGroupRoutes = void 0;
var _express = require("express");
var _CreatePostGroupController = require("../modules/PostGroup/useCases/createPostGroup/CreatePostGroupController");
var _DeleteGroupByIDController = require("../modules/postgroup/useCases/deletePostGroupById/DeleteGroupByIDController");
var _GetAllPostGroupController = require("../modules/postgroup/useCases/getGroupAll/GetAllPostGroupController");
const createPostGroupController = new _CreatePostGroupController.CreatePostGroupController();
const deletePostGroupByIDController = new _DeleteGroupByIDController.DeletePostGroupByIDController();
const getAllPostGroupController = new _GetAllPostGroupController.GetAllPostGroupController();
const postGroupRoutes = (0, _express.Router)();
exports.postGroupRoutes = postGroupRoutes;
postGroupRoutes.post("/", createPostGroupController.handle);
postGroupRoutes.delete("/:id", deletePostGroupByIDController.handle);
postGroupRoutes.get("/Ppage=:pPage&pPer_page=:pPer_Page", getAllPostGroupController.handle);