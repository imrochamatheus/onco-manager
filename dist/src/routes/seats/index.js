"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seatsRouter = void 0;
const express_1 = require("express");
const seats_1 = require("../../controllers/seats");
const seatsRouter = (0, express_1.Router)();
exports.seatsRouter = seatsRouter;
seatsRouter.post("/", (req, res) => {
    seats_1.createSeatController.handle(req, res);
});
seatsRouter.get("/", (req, res) => {
    seats_1.listAllSeatsController.handle(req, res);
});
seatsRouter.delete("/:id", (req, res) => {
    seats_1.deleteSeatController.handle(req, res);
});
//# sourceMappingURL=index.js.map