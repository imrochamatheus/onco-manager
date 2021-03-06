import { professionalsRouter } from "./professionals";
import { protocolsRouter } from "./protocols";
import { patientsRouter } from "./patients";
import { seatsRouter } from "./seats";
import { sessionsRouter } from "./sessions";
import { Router } from "express";
import { registerSeatRouter } from "./register_seat";
import { schedulesRouter } from "./schedules";
import authorizarionMiddleware from "../middlewares/authorization.mdw";

const router = Router();

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
router.use(
  "/",
  authorizarionMiddleware(["master", "staff", "operator"]),
  registerSeatRouter
);

export default router;
