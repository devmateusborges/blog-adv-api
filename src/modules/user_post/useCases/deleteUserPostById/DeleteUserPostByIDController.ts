import { DeleteUserPostByIDUseCase } from "./DeleteUserPostByIDUseCase";
import { Request, Response } from "express";

export class DeleteUserPostByIDController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const deleteUserPostByIDUseCase = new DeleteUserPostByIDUseCase();

    const result = await deleteUserPostByIDUseCase.execute({
      id,
      userId: "",
      postId: "",
    });

    return res.status(201).send({
      Menssage: "Sucess",
    });
  }
}
