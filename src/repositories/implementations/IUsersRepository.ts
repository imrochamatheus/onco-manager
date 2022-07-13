import { IUser, IUserCreate } from "../../interfaces/users.interfaces";

interface IUsersRepository {
  create({ email, name }: IUserCreate): Promise<IUser>;
  findByEmail(email: string): Promise<IUser | undefined>;
  list(): Promise<IUser[]>;
}

export { IUsersRepository };
