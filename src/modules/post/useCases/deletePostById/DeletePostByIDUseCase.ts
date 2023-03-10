import { Post } from ".prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreatePostDTO } from "../../Dtos/CreatePostDTO";

export class DeletePostByIDUseCase {
  async execute(id: string): Promise<void> {
    const postAlreadyExists = await prisma.post.delete({
      where: { id: id },
    });

    if (!postAlreadyExists) {
      throw new AppError("Post Not exists!");
    }
  }
}
