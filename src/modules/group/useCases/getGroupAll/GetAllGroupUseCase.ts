import { Group } from ".prisma/client";

import { prisma } from "../../../../prisma/client";

export class GetAllGroupUseCase {
  async execute(): Promise<Group[]> {
    const query2 = await prisma.group.findMany({
      orderBy: {
        created_at: "asc",
      },
      include: {
        post: {
          select: {
            id: true,
            title: true,
            subtitle: true,
            subject: true,
          },
        },
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });

    return query2;
  }
}
