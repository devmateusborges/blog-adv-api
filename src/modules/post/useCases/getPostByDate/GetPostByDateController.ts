import { Request, Response } from "express";
import { GetCountPostUseCase } from "./CountPostUseCase";
import { GetPostByDateUseCase } from "./GetPostByDateUseCase";

export class GetPostByDateController {
  async handle(req: Request, res: Response) {
    const { pPage, pPer_Page } = req.params;
    const getPostByDateUseCase = new GetPostByDateUseCase();
    const getCountPostUseCase = new GetCountPostUseCase();
    const result = await getPostByDateUseCase.execute(
      parseInt(pPage),
      parseInt(pPer_Page)
    );
    const count = await getCountPostUseCase.execute();

    return res.status(200).json({
      code: 200,
      Page: parseInt(pPage),
      Per_Page: parseInt(pPer_Page),
      items: result,
      total_items: count,
    });
  }
}
