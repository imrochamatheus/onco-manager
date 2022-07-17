import { registerSeatRouter } from "./register_seat";
import { protocolsRouter } from "./protocols";
import { patientsRouter } from "./patients";
import { usersRouter } from "./users";
import { seatsRouter } from "./seats";
import { sessionsRouter } from "./sessions";
import { Router } from "express";

const router = Router();

router.use("/", registerSeatRouter);
router.use("/users", usersRouter);
router.use("/seats", seatsRouter);
router.use("/patients", patientsRouter);
router.use("/protocols", protocolsRouter);
router.use("/login", sessionsRouter)

export default router;
