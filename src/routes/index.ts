import { Router } from "express";
import { usersRouter } from "./users";
import { seatsRouter } from "./seats";

const router = Router();

router.use("/users", usersRouter);
router.use("/seats", seatsRouter);

export default router;
