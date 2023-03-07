import { Request, Response } from "express";

import { GetFilterPostUseCase } from "./GetFilterPostUseCase";

export class GetFilterPostController {
  async handle(req: Request, res: Response) {
    const getFilterPostUseCase = new GetFilterPostUseCase();
    const { filter } = req.body;

    const result = await getFilterPostUseCase.execute(filter);

    return res.status(200).json({
      code: 200,
      items: result,
    });
  }
}
