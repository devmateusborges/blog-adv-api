import { DeleteUserByIdUseCase } from "./DeleteUserByIdUseCase";
import { Request, Response } from "express";

export class DeleteUserByIdController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const deleteUserByIdUseCase = new DeleteUserByIdUseCase();

    const result = await deleteUserByIdUseCase.execute({
      id,
      name: "",
      email: "",
    });

    return res.status(201).send({ status: 201, items: result });
  }
}
