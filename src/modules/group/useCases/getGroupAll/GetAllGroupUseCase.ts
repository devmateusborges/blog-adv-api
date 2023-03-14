import { Group, Post } from "@prisma/client";

import { prisma } from "../../../../prisma/client";

export class GetAllGroupUseCase {
  async execute(): Promise<any[]> {
    const query2 = await prisma.group.findMany({
      orderBy: {
        created_at: "asc",
      },
      select: {
        post: true,
      },
    });

    return query2;
  }
}
