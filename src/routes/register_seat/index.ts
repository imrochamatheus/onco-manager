import { Request, Response, Router } from "express";
import {
  createRegisterSeatController,
  listPatientHistoryController,
  listRelatoriesController,
} from "../../controllers/register_seat";

const registerSeatRouter = Router();

registerSeatRouter.post("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "hello" });
});
registerSeatRouter.post("/register_seat", (req: Request, res: Response) => {
  createRegisterSeatController.handle(req, res);
});
registerSeatRouter.get("/relatories/:date", (req: Request, res: Response) => {
  listRelatoriesController.handle(req, res);
});
registerSeatRouter.get(
  "/:patient_id/history",
  (req: Request, res: Response) => {
    listPatientHistoryController.handle(req, res);
  }
);

export { registerSeatRouter };
