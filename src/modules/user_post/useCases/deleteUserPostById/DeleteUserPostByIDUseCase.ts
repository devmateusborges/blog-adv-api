import { Post } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateUserPostDTO } from "../../Dtos/CreateUserPostDTO";

export class DeleteUserPostByIDUseCase {
  async execute(id: CreateUserPostDTO): Promise<void> {
    const userPostAlreadyExists = await prisma.user_Post.delete({
      where: id,
    });

    if (!userPostAlreadyExists) {
      throw new AppError("User or Post Not exists!");
    }
  }
}
