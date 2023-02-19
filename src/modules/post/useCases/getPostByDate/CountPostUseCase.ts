import { prisma } from "../../../../prisma/client";

export class GetCountPostUseCase {
  async execute(): Promise<number> {
    const countPost = await prisma.post.count();

    return countPost;
  }
}
