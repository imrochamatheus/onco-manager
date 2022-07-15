"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppError extends Error {
    constructor(message, statusCode = 400) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}
exports.default = AppError;
//# sourceMappingURL=AppError.js.map