"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const handleAppError_mdw_1 = __importDefault(require("./middlewares/handleAppError.mdw"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routes_1.default);
app.use(handleAppError_mdw_1.default);
app.listen(process.env.PORT || 3000, () => console.log("server listening on port " + (process.env.PORT || 3000)));
exports.default = app;
//# sourceMappingURL=index.js.map