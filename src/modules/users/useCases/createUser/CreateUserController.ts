import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { id, name, email, type, password } = req.body;

    const createUserUseCase = new CreateUserUseCase();

    const result = await createUserUseCase.execute({
      id,
      name,
      email,
      type,
      password,
    });

    return res.status(201).json({ status: 201, items: result });
  }
}
