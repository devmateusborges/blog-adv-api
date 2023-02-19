import { Request, Response } from "express";
import { CreateGroupUseCase } from "./CreateGroupUseCase";

export class CreateGroupController {
  async handle(req: Request, res: Response) {
    const { name_group, description, color_hex } = req.body;

    const createGroupUseCase = new CreateGroupUseCase();

    const result = await createGroupUseCase.execute({
      name_group,
      description,
      color_hex,
    });

    return res.status(201).json(result);
  }
}
