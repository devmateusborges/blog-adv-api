import { Group } from ".prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateGroupDTO } from "../../Dtos/CreateGroupDTO";

export class UpdateGroupUseCase {
  async execute({
    id,
    name_group,
    description,
    color_hex,
    user_id,
  }: CreateGroupDTO): Promise<Group> {
    // Criar Post
    const group = await prisma.group.update({
      where: {
        id: id,
      },
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
