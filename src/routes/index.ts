import { Router } from "express";
import { usersRouter } from "./users";
import { seatsRouter } from "./seats";
import { protocolsRouter } from "./protocols";

const router = Router();

router.use("/users", usersRouter);
router.use("/seats", seatsRouter);
router.use("/protocols", protocolsRouter)

export default router;
