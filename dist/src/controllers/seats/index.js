"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSeatController = exports.listAllSeatsController = exports.createSeatController = void 0;
const seats_1 = require("../../services/seats");
const createSeat_ctrl_1 = require("./createSeat.ctrl");
const deleteSeat_ctrl_1 = require("./deleteSeat.ctrl");
const listAllSeat_ctrl_1 = require("./listAllSeat.ctrl");
const createSeatController = new createSeat_ctrl_1.CreateSeatController(seats_1.createSeatService);
exports.createSeatController = createSeatController;
const deleteSeatController = new deleteSeat_ctrl_1.DeleteSeatController(seats_1.deleteSeatService);
exports.deleteSeatController = deleteSeatController;
const listAllSeatsController = new listAllSeat_ctrl_1.ListAllSeatsController(seats_1.listAllSeatsService);
exports.listAllSeatsController = listAllSeatsController;
//# sourceMappingURL=index.js.map