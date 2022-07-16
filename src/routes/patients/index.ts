import { Request, Response, Router, NextFunction } from "express";
// import { PatientCtrls } from "../../controllers/patients";
import {
  createPatientCtrl,
  deletePatientByIdCtrl,
  getAllPatientsCtrl,
  getPatientByIdCtrl,
  patchPatientByIdCtrl,
} from "../../controllers/patients";
import schemaValidation from "../../middlewares/schemaValidation.mdw";
import { patientCreateSchema, patientPatchSchema } from "../../schemas/patient";

const patientsRouter = Router();

//create patient
patientsRouter.post(
  "/",
  schemaValidation(patientCreateSchema),
  (req: Request, res: Response, next: NextFunction) => {
    createPatientCtrl.handle(req, res, next);
  }
);

//get all patients
patientsRouter.get("/", (req: Request, res: Response) => {
  getAllPatientsCtrl.handle(req, res);
});

//get patient by id
patientsRouter.get(
  "/:id",
  (req: Request, res: Response, next: NextFunction) => {
    getPatientByIdCtrl.handle(req, res, next);
  }
);

//edit patient by id
patientsRouter.patch(
  "/:id",
  schemaValidation(patientPatchSchema),
  (req: Request, res: Response, next: NextFunction) => {
    patchPatientByIdCtrl.handle(req, res, next);
  }
);

//delete patient by id
patientsRouter.delete(
  "/:id",
  (req: Request, res: Response, next: NextFunction) => {
    deletePatientByIdCtrl.handle(req, res, next);
  }
);

export { patientsRouter };
