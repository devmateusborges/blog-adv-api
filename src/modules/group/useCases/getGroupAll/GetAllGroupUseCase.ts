import { Group } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetAllGroupUseCase {
  async execute(): Promise<Group[]> {
    const group = await prisma.group.findMany({
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
