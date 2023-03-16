import { Post } from ".prisma/client";

import { AppError } from "../../../errors/AppError";
import { prisma } from "../../../prisma/client";
import { PostDTO } from "../Dtos/PostDTO";

export class PostUseCase {
  async createPost({
    title,
    subtitle,
    subject,
    url_photo,
    user_id,
    group_id,
  }: PostDTO): Promise<Post> {
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
        user_id,
        group_id,
      },
    });

    return post;
  }

  async updatePost({
    id,
    title,
    subtitle,
    subject,
    user_id,
    url_photo,
    group_id,
  }: PostDTO): Promise<Post> {
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

  async getPostOrderDate(): Promise<Post[]> {
    const posts = await prisma.post.findMany({
      orderBy: {
        created_at: "asc",
      },
    });

    return posts;
  }

  async deletePost(id: string): Promise<void> {
    const postAlreadyExists = await prisma.post.delete({
      where: { id: id },
    });

    if (!postAlreadyExists) {
      throw new AppError("Publicação não cadastrada");
    }
  }

  async getPostFilter(pFilter: string | "%%"): Promise<Post[]> {
    const query1: Post[] =
      await prisma.$queryRaw`Select * from  "post" where title ilike ${pFilter}  `;

    return query1;
  }

  async getPostById(id: string): Promise<Post[]> {
    const post = await prisma.post.findMany({
      where: { id: id },
    });

    return post;
  }
}
