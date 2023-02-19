"use strict";
exports.__esModule = true;
exports.movieRoutes = void 0;
var express_1 = require("express");
var CreateMovieController_1 = require("../modules/movies/useCases/createMovie/CreateMovieController");
var CreateMovieRentController_1 = require("../modules/movies/useCases/createMovieRent/CreateMovieRentController");
var GetMoviesByReleaseDateController_1 = require("../modules/movies/useCases/getMoviesByReleaseDate/GetMoviesByReleaseDateController");
var createMovieController = new CreateMovieController_1.CreateMovieController();
var getMoviesByReleaseDateController = new GetMoviesByReleaseDateController_1.GetMoviesByReleaseDateController();
var createMovieRentController = new CreateMovieRentController_1.CreateMovieRentController();
var movieRoutes = (0, express_1.Router)();
exports.movieRoutes = movieRoutes;
movieRoutes.post("/", createMovieController.handle);
movieRoutes.get("/release", getMoviesByReleaseDateController.handle);
movieRoutes.post("/rent", createMovieRentController.handle);
//# sourceMappingURL=movie.routes.js.map