import { Movie } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../Dtos/CreateUserDTO";

export class DeleteUserByIdUseCase {
  async execute(id: CreateUserDTO): Promise<void> {
    // Verificar se o filme já existe
    const userAlreadyExists = await prisma.user.delete({
      where: id,
    });

    if (!userAlreadyExists) {
      throw new AppError("user Not exists!");
    }
  }
}
