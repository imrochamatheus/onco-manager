import { Request, Response, Router } from "express";
import {
  createSeatController,
  deleteSeatController,
  listAllSeatsController,
} from "../../controllers/seats";
import authorizarionMiddleware from "../../middlewares/authorization.mdw";

const seatsRouter = Router();

seatsRouter.post(
  "/",
  authorizarionMiddleware(["master", "staff"]),
  (req: Request, res: Response) => {
    createSeatController.handle(req, res);
  }
);
seatsRouter.get(
  "/",
  authorizarionMiddleware(["master", "staff", "operator"]),
  (req: Request, res: Response) => {
    listAllSeatsController.handle(req, res);
  }
);
seatsRouter.delete(
  "/:id",
  authorizarionMiddleware(["master", "staff"]),
  (req: Request, res: Response) => {
    deleteSeatController.handle(req, res);
  }
);

//comment

export { seatsRouter };
