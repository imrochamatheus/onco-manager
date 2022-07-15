"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const patients_1 = require("./patients");
const users_1 = require("./users");
const seats_1 = require("./seats");
const register_seat_1 = require("./register_seat");
const router = (0, express_1.Router)();
router.use("/users", users_1.usersRouter);
router.use("/patients", patients_1.patientsRouter);
router.use("/seats", seats_1.seatsRouter);
router.use("/", register_seat_1.registerSeatRouter);
exports.default = router;
//# sourceMappingURL=index.js.map