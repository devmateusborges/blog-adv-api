import { Post } from ".prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetPostByDateUseCase {
  async execute(): Promise<Post[]> {
    const posts = await prisma.post.findMany({
      orderBy: {
        date_post: "desc",
      },
    });

    return posts;
  }
}
