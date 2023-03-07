import { Group } from ".prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateGroupDTO } from "../../Dtos/CreateGroupDTO";

export class CreateGroupUseCase {
  async execute({
    name_group,
    description,
    color_hex,
    user_id,
  }: CreateGroupDTO): Promise<Group> {
    // Verificar se Post
    const groupAlreadyExists = await prisma.group.findUnique({
      where: {
        name_group,
      },
    });

    if (groupAlreadyExists) {
      throw new AppError("Group already exists!");
    }

    // Criar Post
    const group = await prisma.group.create({
      data: {
        name_group,
        description,
        color_hex,
        user_id,
      },
    });

    return group;
  }
}
