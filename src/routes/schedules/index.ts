import { NextFunction, Request, Response, Router } from "express";
import {
  createScheduleCtrl,
  deleteScheduleByIdCtrl,
  getAllSchedulesCtrl,
  getScheduleByIdCtrl,
  patchScheduleByIdCtrl,
} from "../../controllers/schedules";
import checkIfPatientExistsMw from "../../middlewares/checkIfPatientExists.mdw";
import checkIfProtocolExists from "../../middlewares/checkIfProtocolExists.mdw";
import checkIfScheduleExistsMw from "../../middlewares/checkIfScheduleExists.mdw";
import schemaValidation from "../../middlewares/schemaValidation.mdw";
import { scheduleCreateSchema } from "../../schemas/schedules";

const schedulesRouter = Router();

//create schedule
schedulesRouter.post(
  "/",
  checkIfPatientExistsMw,
  checkIfProtocolExists,
  schemaValidation(scheduleCreateSchema),
  (req: Request, res: Response, next: NextFunction) => {
    createScheduleCtrl.handle(req, res, next);
  }
);

//get all schedule
schedulesRouter.get("/", (req: Request, res: Response) => {
  getAllSchedulesCtrl.handle(req, res);
});

//get schedule by id
schedulesRouter.get(
  "/:id",
  checkIfScheduleExistsMw,
  (req: Request, res: Response) => {
    getScheduleByIdCtrl.handle(req, res);
  }
);

//edit schedule by id
schedulesRouter.patch(
  "/:id",
  checkIfScheduleExistsMw,
  schemaValidation(scheduleCreateSchema),
  (req: Request, res: Response) => {
    patchScheduleByIdCtrl.handle(req, res);
  }
);

//delete schedule by id
schedulesRouter.delete(
  "/:id",
  checkIfScheduleExistsMw,
  (req: Request, res: Response) => {
    deleteScheduleByIdCtrl.handle(req, res);
  }
);

export { schedulesRouter };
