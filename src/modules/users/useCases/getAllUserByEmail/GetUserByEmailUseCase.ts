import { User } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../Dtos/CreateUserDTO";

export class GetUserByEmailUseCase {
  async execute(email: string): Promise<User> {
    const users = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!users) {
      throw new AppError("user Not exists!");
    }
    return users;
  }
}
