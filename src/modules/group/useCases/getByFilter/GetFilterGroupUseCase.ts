import { Group } from ".prisma/client";

import { prisma } from "../../../../prisma/client";

export class GetFilterGroupUseCase {
  async execute(pFilter: string | "%%"): Promise<Group[]> {
    const query1: Group[] =
      await prisma.$queryRaw`Select * from  "group" where name_group ilike ${pFilter}`;

    return query1;
  }
}
