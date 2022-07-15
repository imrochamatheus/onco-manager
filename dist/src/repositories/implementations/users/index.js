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
exports.UsersRepository = void 0;
const client_1 = require("@prisma/client");
class UsersRepository {
    create({ email, name, admin }) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            const user = yield prisma.user.create({
                data: {
                    email,
                    name,
                    admin,
                },
            });
            return user;
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            // throw new AppError("Method not implemented.");
            return undefined;
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            // throw new AppError("Method not implemented.");
            return [];
        });
    }
}
exports.UsersRepository = UsersRepository;
//# sourceMappingURL=index.js.map