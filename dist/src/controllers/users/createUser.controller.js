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
exports.CreateUserController = void 0;
class CreateUserController {
    constructor(createUserService) {
        this.createUserService = createUserService;
    }
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userData = Object.assign({}, req.body);
            const newUser = yield this.createUserService.execute(userData);
            return res.status(201).json(newUser);
        });
    }
}
exports.CreateUserController = CreateUserController;
//# sourceMappingURL=createUser.controller.js.map