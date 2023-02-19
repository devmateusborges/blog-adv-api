import { Request, Response } from "express";
import { CreateUserPostUseCase } from "./CreateUserPostUseCase";

export class CreateUserPostController {
  async handle(req: Request, res: Response) {
    const { userId, postId } = req.body;

    const createUserPostUseCase = new CreateUserPostUseCase();

    const result = await createUserPostUseCase.execute({
      userId,
      postId,
    });

    return res.status(201).json(result);
  }
}
