import { DeleteGroupByIDUseCase } from "./DeleteGroupByIDUseCase";
import { Request, Response } from "express";

export class DeleteGroupByIDController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const deleteGroupByIDUseCase = new DeleteGroupByIDUseCase();

    const result = await deleteGroupByIDUseCase.execute(id);

    return res.status(201).send({
      Menssage: "Sucess",
    });
  }
}
