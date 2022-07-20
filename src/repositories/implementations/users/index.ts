import { PrismaClient } from "@prisma/client";
import { prisma } from "../../../client";
import { IUsersRepository } from "./IUsersRepository";
import { IUser, IUserCreate } from "./../../../interfaces/users.interfaces";

class UsersRepository implements IUsersRepository {
  public async create({ email, name, admin }: IUserCreate): Promise<IUser> {
    const user = await prisma.user.create({
      data: {
        email,
        name,
        admin,
      },
    });

    return user;
  }

  async findByEmail(email: string): Promise<IUser | undefined> {
    // throw new AppError("Method not implemented.");
    return undefined;
  }

  async list(): Promise<IUser[]> {
    // throw new AppError("Method not implemented.");
    return [];
  }
}

export { UsersRepository };
