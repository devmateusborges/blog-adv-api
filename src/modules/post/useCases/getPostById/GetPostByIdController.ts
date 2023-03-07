import { Request, Response } from "express";
import { GetPostByIdUseCase } from "./GetPostByIdUseCase";

export class GetPostByIdController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const getAllPostUseCase = new GetPostByIdUseCase();

    const result = await getAllPostUseCase.execute(id);

    return res.status(200).json({ status: 200, items: result });
  }
}
