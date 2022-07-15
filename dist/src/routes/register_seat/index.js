"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSeatRouter = void 0;
const express_1 = require("express");
const register_seat_1 = require("../../controllers/register_seat");
const registerSeatRouter = (0, express_1.Router)();
exports.registerSeatRouter = registerSeatRouter;
registerSeatRouter.post("/register_seat", (req, res) => {
    register_seat_1.createRegisterSeatController.handle(req, res);
});
registerSeatRouter.get("/relatories/:date", (req, res) => {
    register_seat_1.listRelatoriesController.handle(req, res);
});
//# sourceMappingURL=index.js.map