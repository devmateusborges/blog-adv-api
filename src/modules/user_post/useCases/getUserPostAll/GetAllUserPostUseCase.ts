import { User_Post } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetAllUserPostUseCase {
  async execute(): Promise<User_Post[]> {
    const user_post = await prisma.user_Post.findMany({
      include: {
        user: {
          select: {
            id: true,
            email: true,
            name: true,
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

    return user_post;
  }
}
