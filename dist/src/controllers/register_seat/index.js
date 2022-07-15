"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listRelatoriesController = exports.createRegisterSeatController = void 0;
const register_seat_1 = require("../../services/register_seat");
const createRegisterSeat_ctrl_1 = require("./createRegisterSeat.ctrl");
const listRelatories_ctrl_1 = require("./listRelatories.ctrl");
const createRegisterSeatController = new createRegisterSeat_ctrl_1.CreateRegisterSeatController(register_seat_1.createRegisterSeatService);
exports.createRegisterSeatController = createRegisterSeatController;
const listRelatoriesController = new listRelatories_ctrl_1.ListRelatoriesController(register_seat_1.listRelatoriesService);
exports.listRelatoriesController = listRelatoriesController;
//# sourceMappingURL=index.js.map