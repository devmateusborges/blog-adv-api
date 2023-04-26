import { Request, Response } from "express";
import { GptUseCase } from "./GptUseCase";
import jwt from "jsonwebtoken";

export class GptController {
  async gptSearch(req: Request, res: Response) {
    const { questionAmount, level, subject, alternativeAmount } = req.body;
    const teste = new GptUseCase();

    const result: string = await teste.createNewQuery(
      questionAmount,
      level,
      subject,
      alternativeAmount
    );

    return res.status(201).json({
      status: 201,
      items: {
        question: result,
        level: level,
        subject: subject,
        alternativeAmount: alternativeAmount,
      },
      message: "Successfully registration",
    });
  }
}
