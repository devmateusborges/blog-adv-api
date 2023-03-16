import { User } from ".prisma/client";
import { AppError } from "../../../errors/AppError";
import { prisma } from "../../../prisma/client";
import { UserDTO } from "../Dtos/UserDTO";

import bcrypt, { hash } from "bcryptjs";
import { UserService } from "../service/service";

export class UserUseCase {
  async createUser({ name, email, type, password }: UserDTO): Promise<User> {
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userAlreadyExists) {
      throw new AppError("User already exists!");
    }

    // Criar o usuário

    const pass = await hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        type,
        password: pass,
      },
    });

    return user;
  }

  async updateUser({
    id,
    name,
    password,
    email,
    type,
  }: UserDTO): Promise<User> {
    const user = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        id,
        name,
        password,
        email,
        type,
      },
    });

    return user;
  }

  async deleteUser(id: string): Promise<void> {
    // Verificar se o filme já existe
    const userAlreadyExists = await prisma.user.delete({
      where: { id: id },
    });

    if (!userAlreadyExists) {
      throw new AppError("user Not exists!");
    }
  }

  async getUserAll(): Promise<User[]> {
    const users = await prisma.user.findMany();

    return users;
  }

  async getUserByEmail(id: string): Promise<User> {
    const users = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!users) {
      throw new AppError("user Not exists!");
    }
    return users;
  }

  async createToken(email: string, password: string): Promise<any> {
    const userService = new UserService();

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new AppError("Email or Password incorret!");
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      throw new AppError("Password incorret!");
    }

    const token = userService.GenerateToken(user);

    const tokenVery = await prisma.tokenReflash.findUnique({
      where: {
        user_id: user.id,
      },
    });
    if (tokenVery?.user_id == user.id) {
      const result = await prisma.tokenReflash.update({
        where: {
          user_id: user.id,
        },
        data: {
          token: String(await token),
          user_id: user.id,
        },
      });
    } else {
      const result = await prisma.tokenReflash.create({
        data: {
          token: String(await token),
          user_id: user.id,
        },
      });
    }

    return token;
  }

  async authenticateToken(id: string): Promise<any> {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!user) {
      throw new AppError("Email or Password incorret!");
    }
    return user;
  }
}
