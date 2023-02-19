import { Post_Group } from ".prisma/client";
import { Request, Response } from "express";
import { CreatePostGroupUseCase } from "./CreatePostGroupUseCase";

export class CreatePostGroupController {
  async handle(req: Request, res: Response) {
    const { groupId, postId } = req.body;

    const createPostGroupUseCase = new CreatePostGroupUseCase();

    const result = await createPostGroupUseCase.execute({
      groupId,
      postId,
    });

    return res.status(201).json(result);
  }
}
