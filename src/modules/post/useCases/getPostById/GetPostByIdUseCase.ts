import { Post } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetPostByIdUseCase {
  async execute(id: string): Promise<Post[]> {
    const post = await prisma.post.findMany({
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

    return post;
  }
}
