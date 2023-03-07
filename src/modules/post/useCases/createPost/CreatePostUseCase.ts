import { Post } from ".prisma/client";

import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreatePostDTO } from "../../Dtos/CreatePostDTO";

export class CreatePostUseCase {
  async execute({
    title,
    subtitle,
    subject,
    url_photo,
    date_post,
    user_id,
  }: CreatePostDTO): Promise<Post> {
    // Verificar se Post
    const postAlreadyExists = await prisma.post.findUnique({
      where: {
        title,
      },
    });

    if (postAlreadyExists) {
      throw new AppError("Post already exists!");
    }

    // Criar Post
    const post = await prisma.post.create({
      data: {
        title,
        subtitle,
        subject,
        url_photo,
        date_post,
        user_id,
      },
    });

    return post;
  }
}
