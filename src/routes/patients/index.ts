import { Request, Response, Router } from "express";
// import { PatientCtrls } from "../../controllers/patients";
import {
  createPatientCtrl,
  deletePatientByIdCtrl,
  getAllPatientsCtrl,
  getPatientByIdCtrl,
} from "../../controllers/patients";

const patientsRouter = Router();

//create patient
patientsRouter.post("/", (req: Request, res: Response) => {
  createPatientCtrl.handle(req, res);
  // PatientCtrls.create.handle(req, res);
});

//get all patients
patientsRouter.get("/", (req: Request, res: Response) => {
  getAllPatientsCtrl.handle(req, res);
});

//get patient by id
patientsRouter.get("/:id", (req: Request, res: Response) => {
  getPatientByIdCtrl.handle(req, res);
});

//edit patient by id
patientsRouter.patch("/:id", (req: Request, res: Response) => {
  // patchPatientByIdController.handle(req, res)
});

//delete patient by id
patientsRouter.delete("/:id", (req: Request, res: Response) => {
  deletePatientByIdCtrl.handle(req, res);
});

export { patientsRouter };
