import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreatePostGrupoDTO } from "../../Dtos/CreatePostGrupoDTO";

export class CreatePostGroupUseCase {
  async execute({ postId, groupId }: CreatePostGrupoDTO): Promise<void> {
    // verificar se post
    const postExists = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });

    if (!postExists) {
      throw new AppError("post does not exists!");
    }

    const postAlreadyRented = await prisma.post_Group.findFirst({
      where: {
        postId,
      },
    });

    // verificar se Grupo existe
    const userExists = await prisma.group.findUnique({
      where: {
        id: groupId,
      },
    });

    if (!userExists) {
      throw new AppError("User does not exists!");
    }

    // criar Vicular grupo no post
    await prisma.post_Group.create({
      data: {
        postId,
        groupId,
      },
    });
  }
}
