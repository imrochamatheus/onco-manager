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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserService = void 0;
const AppError_1 = __importDefault(require("../../errors/AppError"));
class CreateUserService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    execute({ email, name, admin, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const userAlreadyExists = yield this.usersRepository.findByEmail(email);
            if (userAlreadyExists)
                throw new AppError_1.default("This email already exists");
            const createdUser = yield this.usersRepository.create({
                email,
                name,
                admin,
            });
            return createdUser;
        });
    }
}
exports.CreateUserService = CreateUserService;
//# sourceMappingURL=createUser.service.js.map