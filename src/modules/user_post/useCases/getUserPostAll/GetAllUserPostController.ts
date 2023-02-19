import { Request, Response } from "express";
import { GetAllUserPostUseCase } from "./GetAllUserPostUseCase";

export class GetAllUserPostController {
  async handle(req: Request, res: Response) {
    const getAllUserPostUseCase = new GetAllUserPostUseCase();

    const result = await getAllUserPostUseCase.execute();

    return res.status(200).json({ status: 200, items: result });
  }
}
