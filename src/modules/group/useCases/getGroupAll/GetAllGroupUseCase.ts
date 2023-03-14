import { Group, Post } from "@prisma/client";

import { prisma } from "../../../../prisma/client";
import { CreateGroupDTO } from "../../Dtos/CreateGroupDTO";

export class GetAllGroupUseCase {
  async execute(): Promise<any[]> {
    const query1: Group[] =
      await prisma.$queryRaw`SELECT a.id as "id_group_1" , a.name_group , a.description, b.id , b.title ,b.subtitle  , b.group_id 
      FROM "group" a
      INNER JOIN "post" b
      on a.id  = b.group_id  ;`;

    const res: any[] | PromiseLike<any[]> = [];
    const post: any[] | PromiseLike<any[]> = [];

    let id: string | undefined;
    query1.map((group: CreateGroupDTO) => {
      post.push({
        id: group.id,
        title: group.title,
        subtitle: group.subtitle,
        group_id: group.group_id,
      });
    });

    query1.map((group: CreateGroupDTO) => {
      if (group.id_group_1 != id) {
        res.push({
          id: group.id_group_1,
          name_group: group.name_group,
          post: post.filter((post) => post.group_id == group.id_group_1),
        });
        id = group.id_group_1;
      }
    });

    return res;
    // const query2 = await prisma.group.findMany({
    //   orderBy: {
    //     created_at: "asc",
    //   },
    //   select: {
    //     _count: true,
    //   },
    // });

    // return query2;
  }
}
