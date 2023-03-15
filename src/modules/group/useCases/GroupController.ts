import { Request, Response } from "express";
import { GroupUseCase } from "./GroupUseCase";

export class GroupController {
  async createGroup(req: Request, res: Response) {
    const { name_group, description, color_hex, user_id } = req.body;

    const groupUseCase = new GroupUseCase();

    const result = await groupUseCase.createGroup({
      name_group,
      description,
      color_hex,
      user_id,
    });

    return res.status(201).json(result);
  }

  async getGroupAll(req: Request, res: Response) {
    const groupUseCase = new GroupUseCase();
    const result = await groupUseCase.getGroupAll();
    const count = await groupUseCase.countGroupAll();

    return res.status(200).json({
      code: 200,
      items: result,
      total_items: count,
    });
  }

  async deleteGroup(req: Request, res: Response) {
    const groupUseCase = new GroupUseCase();
    const { id } = req.params;

    const result = await groupUseCase.deleteGroup(id);

    return res.status(201).send({
      Menssage: "Sucess",
    });
  }

  async updateGroup(req: Request, res: Response) {
    const groupUseCase = new GroupUseCase();
    const { name_group, description, color_hex, user_id } = req.body;
    const { id } = req.params;

    const result = await groupUseCase.updateGroup({
      id,
      name_group,
      description,
      color_hex,
      user_id,
    });

    return res.status(201).json(result);
  }

  async getGroupFilter(req: Request, res: Response) {
    const groupUseCase = new GroupUseCase();
    const { filter } = req.body;
    const result = await groupUseCase.getGroupFilter(filter);

    return res.status(200).json({
      code: 200,
      items: result,
    });
  }

  async getGroupById(req: Request, res: Response) {
    const groupUseCase = new GroupUseCase();
    const { id } = req.params;

    const result = await groupUseCase.getGroupById(id);

    return res.status(200).json({ status: 200, items: result });
  }
}
