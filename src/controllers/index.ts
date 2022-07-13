import { createUserService } from "../services";
import { CreateUserController } from "./users/createUser.controller";

const createUserController = new CreateUserController(createUserService);

export { createUserController };
