import {
  createPatientSvc,
  deletePatientByIdSvc,
  getAllPatientsSvc,
  getPatientByIdSvc,
  patchPatientByIdSvc,
} from "../../services/patients";

import { CreatePatientCtrl } from "./createPatient.ctrl";
import { DeletePatientByIdCtrl } from "./deletePatientById.ctrl";
import { GetAllPatientsCtrl } from "./getAllPatients.ctrl";
import { GetPatientByIdCtrl } from "./getPatientById.ctrl";
import { PatchPatientByIdCtrl } from "./patchPatientById.ctrl";

const createPatientCtrl = new CreatePatientCtrl(createPatientSvc);
const getAllPatientsCtrl = new GetAllPatientsCtrl(getAllPatientsSvc);
const getPatientByIdCtrl = new GetPatientByIdCtrl(getPatientByIdSvc);
const patchPatientByIdCtrl = new PatchPatientByIdCtrl(patchPatientByIdSvc);
const deletePatientByIdCtrl = new DeletePatientByIdCtrl(deletePatientByIdSvc);

export {
  createPatientCtrl,
  getAllPatientsCtrl,
  getPatientByIdCtrl,
  patchPatientByIdCtrl,
  deletePatientByIdCtrl,
};

// export class PatientCtrls {
//   static create = new CreatePatientCtrl(PatientSvcs.create);
// }
