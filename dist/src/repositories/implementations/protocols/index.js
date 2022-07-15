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
exports.ProtocolsRepository = void 0;
const client_1 = require("@prisma/client");
class ProtocolsRepository {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    createProtocol({ name, description, volume, infusion_time, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const protocol = yield this.prisma.protocol.create({
                data: {
                    name,
                    description,
                    volume,
                    infusion_time,
                },
            });
            return protocol;
        });
    }
    listAllProtocols() {
        return __awaiter(this, void 0, void 0, function* () {
            const protocols = yield this.prisma.protocol.findMany();
            return protocols;
        });
    }
    readOneProtocol(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const protocol = yield this.prisma.protocol.findUnique({
                where: {
                    id,
                },
            });
            return protocol;
        });
    }
    updateProtocol(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.prisma.protocol.update({
                data: data,
                where: {
                    id,
                },
            });
        });
    }
    deleteProtocol(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.prisma.protocol.delete({
                where: {
                    id,
                },
            });
        });
    }
}
exports.ProtocolsRepository = ProtocolsRepository;
//# sourceMappingURL=index.js.map