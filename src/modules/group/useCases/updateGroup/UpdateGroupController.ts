import { Request, Response } from "express";
import { UpdateGroupUseCase } from "./UpdateGroupUseCase";

export class UpdateGroupController {
  async handle(req: Request, res: Response) {
    const { name_group, description, color_hex, user_id } = req.body;
    const { id } = req.params;

    const updateGroupUseCase = new UpdateGroupUseCase();

    const result = await updateGroupUseCase.execute({
      id,
      name_group,
      description,
      color_hex,
      user_id,
    });

    return res.status(201).json(result);
  }
}
