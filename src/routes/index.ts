import { usersRouter } from "./users";
import { Router } from "express";

const router = Router();

router.use("/users", usersRouter);

export default router;
