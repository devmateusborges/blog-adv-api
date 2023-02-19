import { Request, Response } from "express";
import { CreatePostUseCase } from "./CreatePostUseCase";

export class CreatePostController {
  async handle(req: Request, res: Response) {
    const { title, subject, subtitle, url_photo, date_post } = req.body;

    const createPostUseCase = new CreatePostUseCase();

    const result = await createPostUseCase.execute({
      title,
      subject,
      subtitle,
      url_photo,
      date_post,
    });

    return res.status(201).json(result);
  }
}
