import { UserDTO } from "../Dtos/UserDTO";
import jwt from "jsonwebtoken";

export class UserService {
  async GenerateToken({ id, email, name }: UserDTO) {
    const token = jwt.sign({ id, email, name }, process.env.JWT_SECRET!, {
      expiresIn: process.env.JWT_EXPIRED_TOKEN!,
    });

    return token;
  }
}
