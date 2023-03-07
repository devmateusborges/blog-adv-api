import { Post } from ".prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetPostByDateUseCase {
  async execute(): Promise<Post[]> {
    const posts = await prisma.post.findMany({
      orderBy: {
        date_post: "asc",
      },
      include: {
        post_grupo: {
          select: {
            group: {
              select: {
                name_group: true,
                description: true,
              },
            },
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

    return posts;
  }
}
