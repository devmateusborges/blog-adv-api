import { Group } from ".prisma/client";
import { Post } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreatePostDTO } from "../../Dtos/CreatePostDTO";

export class UpdatePostUseCase {
  async execute({
    id,
    title,
    subtitle,
    subject,
    user_id,
    url_photo,
    group_id,
  }: CreatePostDTO): Promise<Post> {
    // Criar Post
    const post = await prisma.post.update({
      where: {
        id: id,
      },
      data: {
        title,
        subtitle,
        subject,
        url_photo,
        user_id,
        group_id,
      },
    });

    return post;
  }
}
