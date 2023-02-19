import { Post } from ".prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreatePostGroupDTO } from "../../Dtos/CreateGroupDTO";

export class DeletePostGroupByIDUseCase {
  async execute(id: CreatePostGroupDTO): Promise<void> {
    const groupAlreadyExists = await prisma.post_group.delete({
      where: id,
    });

    if (!groupAlreadyExists) {
      throw new AppError("Group Not exists!");
    }
  }
}
