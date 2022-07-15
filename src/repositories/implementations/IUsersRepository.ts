import { IUser, IUserCreate } from "../../interfaces/users.interfaces";

interface IUsersRepository {
  list(): Promise<IUser[]>;
  create({ email, name }: IUserCreate): Promise<IUser>;
  findByEmail(email: string): Promise<IUser | undefined>;
}

export { IUsersRepository };
