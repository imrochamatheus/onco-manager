import { PatientRepository } from "../../repositories/implementations/patients";
import { CreatePatientSvc } from "./createPatient.svc";
import { DeletePatientByIdSvc } from "./deletePatientById.svc";
import { GetAllPatientsSvc } from "./getAllPatients.svc";
import { GetPatientByIdSvc } from "./getPatientById.svc";

const patientRepository = new PatientRepository();

const createPatientSvc = new CreatePatientSvc(patientRepository);
const getAllPatientsSvc = new GetAllPatientsSvc(patientRepository);
const getPatientByIdSvc = new GetPatientByIdSvc(patientRepository);
//patch
const deletePatientByIdSvc = new DeletePatientByIdSvc(patientRepository);

export {
  createPatientSvc,
  getAllPatientsSvc,
  getPatientByIdSvc,
  deletePatientByIdSvc,
};

// export class PatientSvcs {
//   static patientRepository = new PatientRepository();

//   static create = new CreatePatientSvc(this.patientRepository);
// }
