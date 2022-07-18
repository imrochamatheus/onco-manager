import { professionalsRouter } from "./professionals";
import { protocolsRouter } from "./protocols";
import { patientsRouter } from "./patients";
import { usersRouter } from "./users";
import { seatsRouter } from "./seats";
import { sessionsRouter } from "./sessions";
import { Router } from "express";
import { registerSeatRouter } from "./register_seat";
import { schedulesRouter } from "./schedules";
import authorizarionMiddleware from "../middlewares/authorization.mdw";

const router = Router();

router.use("/users", usersRouter);
router.use("/seats", seatsRouter);
router.use("/login", sessionsRouter);
router.use("/patients", patientsRouter);
router.use("/protocols", protocolsRouter);
router.use("/professionals", professionalsRouter);
router.use(
  "/schedules",
  authorizarionMiddleware(["master", "staff"]),
  schedulesRouter
);
router.use("/", registerSeatRouter);

export default router;
