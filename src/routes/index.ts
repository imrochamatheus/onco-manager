import { professionalsRouter } from "./professionals";
import { registerSeatRouter } from "./register_seat";
import { protocolsRouter } from "./protocols";
import { patientsRouter } from "./patients";
import { usersRouter } from "./users";
import { seatsRouter } from "./seats";
import { sessionsRouter } from "./sessions";
import { Router } from "express";

const router = Router();

router.use("/users", usersRouter);
router.use("/seats", seatsRouter);
router.use("/", registerSeatRouter);
router.use("/login", sessionsRouter);
router.use("/patients", patientsRouter);
router.use("/protocols", protocolsRouter);
router.use("/professionals", professionalsRouter);

export default router;
