import { Request, Response } from "express";
import { GetPostByDateUseCase } from "./GetPostByDateUseCase";

export class GetPostByDateController {
  async handle(req: Request, res: Response) {
    const getPostByDateUseCase = new GetPostByDateUseCase();

    const result = await getPostByDateUseCase.execute();

    return res.status(200).json({
      code: 200,
      items: result,
      total_items: 0,
    });
  }
}
