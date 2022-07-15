"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listRelatoriesService = exports.createRegisterSeatService = void 0;
const register_seat_1 = require("../../repositories/implementations/register_seat");
const createRegisterSeat_svc_1 = require("./createRegisterSeat.svc");
const listRelatories_svc_1 = require("./listRelatories.svc");
const registerSeatRepository = new register_seat_1.RegisterSeatRepository();
const createRegisterSeatService = new createRegisterSeat_svc_1.CreateRegisterSeatService(registerSeatRepository);
exports.createRegisterSeatService = createRegisterSeatService;
const listRelatoriesService = new listRelatories_svc_1.ListRelatoriesService(registerSeatRepository);
exports.listRelatoriesService = listRelatoriesService;
//# sourceMappingURL=index.js.map