import { Router } from "express";
import { usersRouter } from "./users";
import { seatsRouter } from "./seats";
import { registerSeatRouter } from "./register_seat";

const router = Router();

router.use("/users", usersRouter);
router.use("/seats", seatsRouter);
router.use("/", registerSeatRouter)

export default router;
