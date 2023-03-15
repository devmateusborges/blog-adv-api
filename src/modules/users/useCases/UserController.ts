import { UserService } from "./../service/service";
import { Request, Response } from "express";
import { UserUseCase } from "./UserUseCase";
import jwt from "jsonwebtoken";

export class UserController {
  async createUser(req: Request, res: Response) {
    const { id, name, email, type, password } = req.body;

    const createUserUseCase = new UserUseCase();

    const result = await createUserUseCase.createUser({
      id,
      name,
      email,
      type,
      password,
    });

    return res.status(201).json({ status: 201, items: result });
  }
  async updateUser(req: Request, res: Response) {
    const userUseCase = new UserUseCase();
    const { name, password, email, type } = req.body;
    const { id } = req.params;

    const result = await userUseCase.updateUser({
      id,
      name,
      password,
      email,
      type,
    });

    return res.status(201).json(result);
  }

  async deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    const userUseCase = new UserUseCase();

    const result = await userUseCase.deleteUser(id);

    return res.status(201).send({ status: 201, items: result });
  }

  async getUserAll(req: Request, res: Response) {
    const userUseCase = new UserUseCase();

    const result = await userUseCase.getUserAll();

    return res.status(200).json({ status: 200, items: result });
  }

  async authenticate(req: Request, res: Response, next: any) {
    const userUseCase = new UserUseCase();
    const token = req.headers.authorization;

    if (!token) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    try {
      const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
      //Codigo abaixo vai na tabela e ve se existe esse usuario
      const result = userUseCase.authenticateToken(decoded.id);
      result.then((res) => {
        return res.id;
      }) == decoded.id;
      next();
    } catch {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }
  }

  async getUserByEmail(req: Request, res: Response) {
    const { email } = req.params;

    const userUseCase = new UserUseCase();

    const result = await userUseCase.getUserByEmail(email);

    return res.status(200).json({ status: 200, items: result });
  }

  async createToken(req: Request, res: Response) {
    const { email, password } = req.body;

    const getUserByEmailUseCase = new UserUseCase();

    const result = await getUserByEmailUseCase.createToken(email, password);

    return res.status(200).json({ status: 200, Token: result });
  }
}
