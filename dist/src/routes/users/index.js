"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../../controllers");
const usersRouter = (0, express_1.Router)();
exports.usersRouter = usersRouter;
usersRouter.post("/", (req, res) => {
    controllers_1.createUserController.handle(req, res);
});
//# sourceMappingURL=index.js.map