import { Request, Response, NextFunction, Router } from "express";

import { createSessionController } from "../../controllers/sessions";

import schemaValidation from "../../middlewares/schemaValidation.mdw";
import { sessionCreateSchema } from "../../schemas/session";

const sessionsRouter = Router();

sessionsRouter.post(
  "/",
  schemaValidation(sessionCreateSchema),
  (req: Request, res: Response, next: NextFunction) => {
    createSessionController.handle(req, res, next);
  }
);

export { sessionsRouter };
