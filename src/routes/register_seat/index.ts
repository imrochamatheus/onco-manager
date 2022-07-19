import { Request, Response, Router, NextFunction } from "express";
import {
  createRegisterSeatController,
  listRelatoriesController,
} from "../../controllers/register_seat";
import authorizarionMiddleware from "../../middlewares/authorization.mdw";

const registerSeatRouter = Router();

registerSeatRouter.post(
  "/register_seat",
  authorizarionMiddleware(["master", "staff"]),
  (req: Request, res: Response, next: NextFunction) => {
    createRegisterSeatController.handle(req, res, next);
  }
);
registerSeatRouter.get("/relatories/:date", (req: Request, res: Response) => {
  listRelatoriesController.handle(req, res);
});

export { registerSeatRouter };
