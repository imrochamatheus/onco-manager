import { Router } from "express";
import { patientsRouter } from "./patients";
import { usersRouter } from "./users";
import { seatsRouter } from "./seats";

const router = Router();

router.use("/users", usersRouter);
router.use("/patients", patientsRouter);
router.use("/seats", seatsRouter);

export default router;
