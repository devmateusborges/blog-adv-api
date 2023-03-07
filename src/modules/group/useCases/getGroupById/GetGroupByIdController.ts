import { Request, Response } from "express";
import { GetGroupByIdUseCase } from "./GetGroupByIdUseCase";

export class GetGroupByIdController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const getAllGroupUseCase = new GetGroupByIdUseCase();

    const result = await getAllGroupUseCase.execute(id);

    return res.status(200).json({ status: 200, items: result });
  }
}
