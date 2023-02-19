import { Request, Response } from "express";
import { CreatePostGroupUseCase } from "./CreatePostGroupUseCase";

export class CreatePostGroupController {
  async handle(req: Request, res: Response) {
    const { postId, groupId } = req.body;

    const createPostGroupUseCase = new CreatePostGroupUseCase();

    await createPostGroupUseCase.execute({ postId, groupId });

    return res.status(201).send();
  }
}
