import { Request, Response } from "express";
import { GetAllGroupUseCase } from "./GetAllGroupUseCase";

export class GetAllGroupController {
  async handle(req: Request, res: Response) {
    const getAllGroupUseCase = new GetAllGroupUseCase();

    const result = await getAllGroupUseCase.execute();

    return res.status(200).json({ status: 200, items: result });
  }
}
