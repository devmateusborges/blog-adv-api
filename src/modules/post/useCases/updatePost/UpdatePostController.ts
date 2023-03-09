import { Request, Response } from "express";
import { UpdatePostUseCase } from "./UpdatePostUseCase";

export class UpdatePostController {
  async handle(req: Request, res: Response) {
    const { title, subtitle, subject, url_photo, user_id, group_id } = req.body;
    const { id } = req.params;

    const updatePostUseCase = new UpdatePostUseCase();

    const result = await updatePostUseCase.execute({
      id,
      title,
      subtitle,
      subject,
      url_photo,
      user_id,
      group_id,
    });

    return res.status(201).json(result);
  }
}
