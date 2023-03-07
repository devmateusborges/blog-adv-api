import { Request, Response } from "express";
import { GetCountPostUseCase } from "./CountPostUseCase";
import { GetPostByDateUseCase } from "./GetPostByDateUseCase";

export class GetPostByDateController {
  async handle(req: Request, res: Response) {
    const getPostByDateUseCase = new GetPostByDateUseCase();
    const getCountPostUseCase = new GetCountPostUseCase();
    const result = await getPostByDateUseCase.execute();
    const count = await getCountPostUseCase.execute();

    return res.status(200).json({
      code: 200,
      items: result,
      total_items: count,
    });
  }
}
