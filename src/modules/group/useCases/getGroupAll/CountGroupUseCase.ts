import { prisma } from "../../../../prisma/client";

export class GetCountGroupUseCase {
  async execute(): Promise<number> {
    const countPost = await prisma.group.count();

    return countPost;
  }
}
