import {
  createPatientSvc,
  deletePatientByIdSvc,
  getAllPatientsSvc,
  getPatientByIdSvc,
} from "../../services/patients";

import { CreatePatientCtrl } from "./createPatient.ctrl";
import { DeletePatientByIdCtrl } from "./deletePatientById.ctrl";
import { GetAllPatientsCtrl } from "./getAllPatients.ctrl";
import { GetPatientByIdCtrl } from "./getPatientById.ctrl";

const createPatientCtrl = new CreatePatientCtrl(createPatientSvc);
const getAllPatientsCtrl = new GetAllPatientsCtrl(getAllPatientsSvc);
const getPatientByIdCtrl = new GetPatientByIdCtrl(getPatientByIdSvc);
// const patchPatientByIdCtrl = new PatchPatientByIdCtrl(createPatientByIdSvc);
const deletePatientByIdCtrl = new DeletePatientByIdCtrl(deletePatientByIdSvc);

export {
  createPatientCtrl,
  getAllPatientsCtrl,
  getPatientByIdCtrl,
  // patchPatientByIdCtrl,
  deletePatientByIdCtrl,
};

// export class PatientCtrls {
//   static create = new CreatePatientCtrl(PatientSvcs.create);
// }
