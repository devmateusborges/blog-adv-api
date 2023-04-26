import { Router } from "express";
import { GptController } from "../modules/users/useCases/GptController";

const userController = new GptController();

const userRoutes = Router();

userRoutes.post("/gpt", userController.gptSearch);

export { userRoutes };
