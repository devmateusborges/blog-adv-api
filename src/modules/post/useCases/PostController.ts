import { Request, Response } from "express";
import { PostUseCase } from "./PostUseCase";

export class PostController {
  async createPost(req: Request, res: Response) {
    const { title, subject, subtitle, url_photo, user_id, group_id } = req.body;

    const postUseCase = new PostUseCase();

    const result = await postUseCase.createPost({
      title,
      subject,
      subtitle,
      url_photo,
      user_id,
      group_id,
    });

    return res.status(201).json(result);
  }

  async updatePost(req: Request, res: Response) {
    const postUseCase = new PostUseCase();
    const { title, subtitle, subject, url_photo, user_id, group_id } = req.body;
    const { id } = req.params;

    const result = await postUseCase.updatePost({
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

  async getPostAllOrderDate(req: Request, res: Response) {
    const postUseCase = new PostUseCase();

    const result = await postUseCase.getPostOrderDate();

    return res.status(200).json({
      code: 200,
      items: result,
      total_items: 0,
    });
  }

  async deletePost(req: Request, res: Response) {
    const postUseCase = new PostUseCase();
    const { id } = req.params;

    const result = await postUseCase.deletePost(id);

    return res.status(201).send({
      Menssage: "Deletado com Sucesso ",
    });
  }

  async getPostFilter(req: Request, res: Response) {
    const postUseCase = new PostUseCase();
    const { filter } = req.body;

    const result = await postUseCase.getPostFilter(filter);

    return res.status(200).json({
      code: 200,
      items: result,
    });
  }

  async getPostById(req: Request, res: Response) {
    const postUseCase = new PostUseCase();
    const { id } = req.params;

    const result = await postUseCase.getPostById(id);

    return res.status(200).json({ status: 200, items: result });
  }
}
