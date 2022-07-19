import { Request, Response, Router, NextFunction } from "express";
import {
  createPatientCtrl,
  deletePatientByIdCtrl,
  getAllPatientsCtrl,
  getPatientByIdCtrl,
  patchPatientByIdCtrl,
} from "../../controllers/patients";
import authorizarionMiddleware from "../../middlewares/authorization.mdw";
import checkIfPatientExistsMw from "../../middlewares/checkIfPatientExists.mdw";
import schemaValidation from "../../middlewares/schemaValidation.mdw";
import { patientCreateSchema, patientPatchSchema } from "../../schemas/patient";

const patientsRouter = Router();

//create patient
patientsRouter.post(
  "/",
  authorizarionMiddleware(["master", "staff"]),
  schemaValidation(patientCreateSchema),
  (req: Request, res: Response, next: NextFunction) => {
    createPatientCtrl.handle(req, res, next);
  }
);

//get all patients
patientsRouter.get(
  "/",
  authorizarionMiddleware(["master", "staff", "operator"]),
  (req: Request, res: Response) => {
    getAllPatientsCtrl.handle(req, res);
  }
);

//get patient by id
patientsRouter.get(
  "/:id",
  authorizarionMiddleware(["master", "staff", "operator"]),
  checkIfPatientExistsMw,
  (req: Request, res: Response, next: NextFunction) => {
    getPatientByIdCtrl.handle(req, res, next);
  }
);

//edit patient by id
patientsRouter.patch(
  "/:id",
  authorizarionMiddleware(["master", "staff"]),
  checkIfPatientExistsMw,
  schemaValidation(patientPatchSchema),
  (req: Request, res: Response, next: NextFunction) => {
    patchPatientByIdCtrl.handle(req, res, next);
  }
);

//delete patient by id
patientsRouter.delete(
  "/:id",
  authorizarionMiddleware(["master", "staff"]),
  checkIfPatientExistsMw,
  (req: Request, res: Response, next: NextFunction) => {
    deletePatientByIdCtrl.handle(req, res, next);
  }
);

export { patientsRouter };
