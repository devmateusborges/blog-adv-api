import { Post } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetPostByIdUseCase {
  async execute(id: string): Promise<Post[]> {
    const post = await prisma.post.findMany({
      where: { id: id },
      include: {
        group: { select: { name_group: true, description: true } },
        user: { select: { email: true, name: true } },
      },
    });

    return post;
  }
}
