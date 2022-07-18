import { Request, Response, NextFunction, Router } from "express";
import {
  createRegisterSeatController,
  listPatientHistoryController,
  listRelatoriesController,
  updateRegisterSeatController,
} from "../../controllers/register_seat";
import checkIfPatientExists from "../../middlewares/checkIfPatientExists.mdw";
import schemaValidation from "../../middlewares/schemaValidation.mdw";
import registerSeatPatchSchema from "../../schemas/register_seat";

const registerSeatRouter = Router();

registerSeatRouter.post("/register_seat", (req: Request, res: Response) => {
  createRegisterSeatController.handle(req, res);
});

registerSeatRouter.patch(
  "/:id_register_seat/checkout",
  schemaValidation(registerSeatPatchSchema),
  (req: Request, res: Response, next: NextFunction) => {
    updateRegisterSeatController.handle(req, res, next);
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

export { registerSeatRouter };
