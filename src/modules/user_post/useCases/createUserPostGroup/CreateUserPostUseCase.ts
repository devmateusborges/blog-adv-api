import { Post_Group, User_Post } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateUserPostDTO } from "../../Dtos/CreateUserPostDTO";

export class CreateUserPostUseCase {
  async execute({ userId, postId }: CreateUserPostDTO): Promise<User_Post> {
    const postAlreadyExists = await prisma.user_Post.findUnique({
      where: {
        postId,
      },
      include: {
        post: {
          select: {
            title: true,
          },
        },
      },
    });

    if (postAlreadyExists) {
      throw new AppError(
        `${postAlreadyExists.post.title} already belongs to a user !`
      );
    }

    // Criar Post
    const post_group = await prisma.user_Post.create({
      data: {
        userId,
        postId,
      },
      include: {
        user: {
          select: {
            name: true,
          },
        },
        post: {
          select: {
            title: true,
          },
        },
      },
    });

    return post_group;
  }
}
