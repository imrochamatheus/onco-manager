"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = __importDefault(require("../errors/AppError"));
const handleAppError = (error, req, res, _) => {
    if (error instanceof AppError_1.default) {
        return res.status(error.statusCode).json({
            message: error.message,
        });
    }
    return res.status(500).json({ message: error.message });
};
exports.default = handleAppError;
//# sourceMappingURL=handleAppError.mdw.js.map