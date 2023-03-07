import { Group } from ".prisma/client";

import { prisma } from "../../../../prisma/client";
import { CreateGroupDTO } from "../../Dtos/CreateGroupDTO";

export class GetGroupByIdUseCase {
  async execute(id: string): Promise<Group[]> {
    const group = await prisma.group.findMany({
      where: { id: id },
      include: {
        post_grupo: {
          select: {
            post: {
              select: {
                title: true,
              },
            },
          },
        },
      },
    });

    return group;
  }
}
