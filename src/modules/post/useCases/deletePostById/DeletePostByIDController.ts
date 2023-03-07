import { DeletePostByIDUseCase } from "./DeletePostByIDUseCase";
import { Request, Response } from "express";

export class DeletePostByIDController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const deletePostByIDUseCase = new DeletePostByIDUseCase();

    const result = await deletePostByIDUseCase.execute(id);

    return res.status(201).send({
      Menssage: "Sucess",
    });
  }
}
