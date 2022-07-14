import { UsersRepository } from "../repositories/implementations/users";
import { CreateUserService } from "./users/createUser.service";

const usersRepository = new UsersRepository();
const createUserService = new CreateUserService(usersRepository);

export { createUserService };
