import { Router } from "express";
import { patientsRouter } from "./patients";
import { usersRouter } from "./users";
import { seatsRouter } from "./seats";
import { registerSeatRouter } from "./register_seat";

const router = Router();

router.use("/users", usersRouter);
router.use("/patients", patientsRouter);
router.use("/seats", seatsRouter);
router.use("/", registerSeatRouter)

export default router;
