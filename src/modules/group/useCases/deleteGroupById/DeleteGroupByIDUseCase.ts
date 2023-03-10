import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateGroupDTO } from "../../Dtos/CreateGroupDTO";

export class DeleteGroupByIDUseCase {
  async execute(id: any): Promise<void> {
    const groupAlreadyExists = await prisma.group.delete({
      where: { id: id },
    });

    if (!groupAlreadyExists) {
      throw new AppError("Group Not exists!");
    }
  }
}
