import { Request, Response } from "express";
import { GetAllPostGroupUseCase } from "./GetAllPostGroupUseCase";

export class GetAllPostGroupController {
  async handle(req: Request, res: Response) {
    const getAllPostGroupUseCase = new GetAllPostGroupUseCase();

    const result = await getAllPostGroupUseCase.execute();

    return res.status(200).json({ status: 200, items: result });
  }
}
