import { Request, Response, Router } from "express";
import { createUserController } from "../../controllers";

const usersRouter = Router();

usersRouter.post("/", (req: Request, res: Response) => {
  createUserController.handle(req, res);
});

export { usersRouter };
