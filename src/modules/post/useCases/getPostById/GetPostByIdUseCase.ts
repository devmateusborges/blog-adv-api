import { Post } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetPostByIdUseCase {
  async execute(id: string): Promise<Post[]> {
    const post = await prisma.post.findMany({
      where: { id: id },
    });

    return post;
  }
}
