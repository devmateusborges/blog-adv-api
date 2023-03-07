import { Request, Response } from "express";
import { GetCountGroupUseCase } from "./CountGroupUseCase";
import { GetAllGroupUseCase } from "./GetAllGroupUseCase";
interface Sort {
  sort: "desc" | "asc";
}
export class GetAllGroupController {
  async handle(req: Request, res: Response) {
    const getAllGroupUseCase = new GetAllGroupUseCase();
    const getCountGroupUseCase = new GetCountGroupUseCase();

    const result = await getAllGroupUseCase.execute();

    const count = await getCountGroupUseCase.execute();
    return res.status(200).json({
      code: 200,
      items: result,
      total_items: count,
    });
  }
}
