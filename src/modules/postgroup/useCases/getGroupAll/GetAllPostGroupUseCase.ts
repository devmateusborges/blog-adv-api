import { Group, Post_Group } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetAllPostGroupUseCase {
  async execute(): Promise<Post_Group[]> {
    const post_group = await prisma.post_Group.findMany({
      include: {
        group: {
          select: {
            id: true,
            name_group: true,
            color_hex: true,
            description: true,
          },
        },
        post: {
          select: {
            id: true,
            date_post: true,
            title: true,
            subject: true,
            url_photo: true,
            subtitle: true,
          },
        },
      },
    });

    return post_group;
  }
}
