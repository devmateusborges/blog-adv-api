import { Request, Response } from "express";

import { GetFilterGroupUseCase } from "./GetFilterGroupUseCase";

export class GetFilterGroupController {
  async handle(req: Request, res: Response) {
    const getFilterGroupUseCase = new GetFilterGroupUseCase();
    const { filter } = req.body;

    const result = await getFilterGroupUseCase.execute(filter);

    return res.status(200).json({
      code: 200,
      items: result,
    });
  }
}
