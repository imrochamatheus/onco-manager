import { Request, Response, Router, NextFunction } from "express";
import {
  createRegisterSeatController,
  listPatientHistoryController,
  listRelatoriesController,
  updateRegisterSeatController,
} from "../../controllers/register_seat";
import schemaValidation from "../../middlewares/schemaValidation.mdw";
import authorizarionMiddleware from "../../middlewares/authorization.mdw";
import checkIfPatientExists from "../../middlewares/checkIfPatientExists.mdw";
import registerSeatPatchSchema from "../../schemas/register_seat";

const registerSeatRouter = Router();

registerSeatRouter.post(
  "/register_seat",
  authorizarionMiddleware(["master", "staff"]),
  (req: Request, res: Response, next: NextFunction) => {
    createRegisterSeatController.handle(req, res, next);
  }
);

registerSeatRouter.get(
  "/relatories/:date",
  (req: Request, res: Response, next: NextFunction) => {
    listRelatoriesController.handle(req, res, next);
  }
);

registerSeatRouter.get(
  "/:patient_id/history",
  checkIfPatientExists,
  (req: Request, res: Response, next: NextFunction) => {
    listPatientHistoryController.handle(req, res, next);
  }
);

registerSeatRouter.patch(
  "/:id_register_seat/checkout",
  authorizarionMiddleware(["master", "staff", "operator"]),
  schemaValidation(registerSeatPatchSchema),
  (req: Request, res: Response, next: NextFunction) => {
    updateRegisterSeatController.handle(req, res, next);
  }
);

export { registerSeatRouter };
