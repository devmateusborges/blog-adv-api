import { Post_Group } from ".prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreatePostGroupDTO } from "../../Dtos/CreateGroupDTO";

export class CreatePostGroupUseCase {
  async execute({ groupId, postId }: CreatePostGroupDTO): Promise<Post_Group> {
    const postAlreadyExists = await prisma.post_Group.findUnique({
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
        `${postAlreadyExists.post.title} is already in a group!`
      );
    }

    // Criar Post
    const post_group = await prisma.post_Group.create({
      data: {
        groupId,
        postId,
      },
      include: {
        group: {
          select: {
            name_group: true,
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
