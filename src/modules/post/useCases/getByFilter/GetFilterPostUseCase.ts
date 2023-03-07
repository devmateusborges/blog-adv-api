import { Post } from ".prisma/client";

import { prisma } from "../../../../prisma/client";

export class GetFilterPostUseCase {
  async execute(pFilter: string | "%%"): Promise<Post[]> {
    const query1: Post[] =
      await prisma.$queryRaw`Select * from  "post" where title ilike ${pFilter}`;

    return query1;
  }
}
