"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterSeatRepository = void 0;
const client_1 = require("@prisma/client");
class RegisterSeatRepository {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    createRegisterSeat({ id_patient, id_protocol, id_seat, checkin_timestamp, checkin_professional, checkout_timestamp, checkout_professional, notes }) {
        return __awaiter(this, void 0, void 0, function* () {
            const registerSeat = yield this.prisma.registerSeat.create({
                data: {
                    id_patient,
                    id_protocol,
                    id_seat,
                    checkin_timestamp,
                    checkin_professional,
                    checkout_timestamp,
                    checkout_professional,
                    notes
                }
            });
            return registerSeat;
        });
    }
    listRelatories({ filter_date }) {
        return __awaiter(this, void 0, void 0, function* () {
            const splitedDate = filter_date.split("-");
            const refatoredDate = `${splitedDate[1]}/${splitedDate[0]}/${splitedDate[2]}`;
            const newDate = new Date(refatoredDate).getTime();
            const relatories = yield this.prisma.registerSeat.findMany({
                where: {
                    checkin_professional: `${newDate}`,
                },
            });
            return relatories;
        });
    }
}
exports.RegisterSeatRepository = RegisterSeatRepository;
//# sourceMappingURL=index.js.map