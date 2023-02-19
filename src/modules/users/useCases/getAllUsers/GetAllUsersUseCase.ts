import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetAllUsersUseCase {
  async execute(): Promise<User[]> {
    const users = await prisma.user.findMany({
      include: {
        user_post: {
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

    return users;
  }
}
