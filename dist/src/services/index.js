"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserService = void 0;
const users_1 = require("../repositories/implementations/users");
const createUser_service_1 = require("./users/createUser.service");
const usersRepository = new users_1.UsersRepository();
const createUserService = new createUser_service_1.CreateUserService(usersRepository);
exports.createUserService = createUserService;
//# sourceMappingURL=index.js.map