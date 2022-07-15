"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSeatService = exports.listAllSeatsService = exports.createSeatService = void 0;
const seats_1 = require("../../repositories/implementations/seats");
const createSeat_svc_1 = require("./createSeat.svc");
const deleteSeat_svc_1 = require("./deleteSeat.svc");
const listAllSeats_svc_1 = require("./listAllSeats.svc");
const seatsRepository = new seats_1.SeatsRepository();
const createSeatService = new createSeat_svc_1.CreateSeatService(seatsRepository);
exports.createSeatService = createSeatService;
const listAllSeatsService = new listAllSeats_svc_1.ListAllSeatsService(seatsRepository);
exports.listAllSeatsService = listAllSeatsService;
const deleteSeatService = new deleteSeat_svc_1.DeleteSeatService(seatsRepository);
exports.deleteSeatService = deleteSeatService;
//# sourceMappingURL=index.js.map