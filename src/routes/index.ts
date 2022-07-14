import { usersRouter } from "./users";
import { Router } from "express";
import { patientsRouter } from "./patients";

const router = Router();

router.use("/users", usersRouter);
router.use("/patients", patientsRouter);

export default router;
