import { DeletePostGroupByIDUseCase } from "./DeleteGroupByIDUseCase";
import { Request, Response } from "express";

export class DeletePostGroupByIDController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const deletePostGroupByIDUseCase = new DeletePostGroupByIDUseCase();

    const result = await deletePostGroupByIDUseCase.execute({
      id,
      groupId: "",
      postId: "",
    });

    return res.status(201).send({
      Menssage: "Sucess",
    });
  }
}
