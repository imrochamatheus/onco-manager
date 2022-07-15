import { Router } from "express";
import { usersRouter } from "./users";
import { seatsRouter } from "./seats";
import { registerSeatRouter } from "./register_seat";
import { professionalsRouter } from "./professionals";

const router = Router();

router.use("/professional", professionalsRouter);
router.use("/users", usersRouter);
router.use("/seats", seatsRouter);
router.use("/", registerSeatRouter);

export default router;
