import { Router } from "express";

const usersRouter = Router();

usersRouter.get("/", (_, res) => res.json({ message: "OK" }));

export { usersRouter };
