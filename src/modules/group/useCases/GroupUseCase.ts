import { Group } from ".prisma/client";
import { AppError } from "../../../errors/AppError";
import { prisma } from "../../../prisma/client";
import { GroupDTO } from "../Dtos/GroupDTO";

export class GroupUseCase {
  async createGroup({
    name_group,
    description,
    color_hex,
    user_id,
  }: GroupDTO): Promise<Group> {
    const groupAlreadyExists = await prisma.group.findUnique({
      where: {
        name_group,
      },
    });

    if (groupAlreadyExists) {
      throw new AppError("Group already exists!");
    }
    const user = await prisma.user.findMany({
      where: {
        id: user_id,
      },
    });

    if (!user) {
      throw new AppError("user is not exists!");
    }

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

  async deleteGroup(id: any): Promise<void> {
    const groupAlreadyExists = await prisma.group.delete({
      where: { id: id },
    });

    if (!groupAlreadyExists) {
      throw new AppError("Group Not exists!");
    }
  }

  async getGroupFilter(pFilter: string | "%%"): Promise<Group[]> {
    const query1: Group[] =
      await prisma.$queryRaw`Select * from  "group" where name_group ilike ${pFilter}`;

    return query1;
  }

  async getGroupAll(): Promise<any[]> {
    const query1: Group[] =
      await prisma.$queryRaw`SELECT a.id as "id_group_1" , a.name_group , a.description, b.id , b.title ,b.subtitle  , b.group_id 
      FROM "group" a
      INNER JOIN "post" b
      on a.id  = b.group_id  ;`;

    const res: any[] | PromiseLike<any[]> = [];
    const post: any[] | PromiseLike<any[]> = [];

    let id: string | undefined;
    query1.map((group: GroupDTO) => {
      post.push({
        id: group.id,
        title: group.title,
        subtitle: group.subtitle,
        group_id: group.group_id,
      });
    });

    query1.map((group: GroupDTO) => {
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
  }

  async countGroupAll() {
    const countPost = await prisma.group.count();

    return countPost;
  }

  async getGroupById(id: string): Promise<Group[]> {
    const group = await prisma.group.findMany({
      where: { id: id },
    });

    return group;
  }

  async updateGroup({
    id,
    name_group,
    description,
    color_hex,
    user_id,
  }: GroupDTO): Promise<Group> {
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
