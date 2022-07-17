import AppError from "../../errors/AppError";
import { IUser, IUserCreate } from "../../interfaces/users.interfaces";
import { IUsersRepository } from "../../repositories/implementations/users/IUsersRepository";

class CreateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({
    email,
    name,
    admin,
  }: IUserCreate): Promise<IUser | AppError> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) throw new AppError("This email already exists");

    const createdUser = await this.usersRepository.create({
      email,
      name,
      admin,
    });

    return createdUser;
  }
}

export { CreateUserService };
