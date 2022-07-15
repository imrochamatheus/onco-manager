"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserController = void 0;
const services_1 = require("../services");
const createUser_controller_1 = require("./users/createUser.controller");
const createUserController = new createUser_controller_1.CreateUserController(services_1.createUserService);
exports.createUserController = createUserController;
//# sourceMappingURL=index.js.map