import { PatientRepository } from "../../repositories/implementations/IPatientRepository";
import { CreatePatientSvc } from "./createPatient.svc";
import { GetAllPatientsSvc } from "./getAllPatients.svc";
import { GetPatientByIdSvc } from "./getPatientById.svc";

const patientRepository = new PatientRepository();

const createPatientSvc = new CreatePatientSvc(patientRepository);
const getAllPatientsSvc = new GetAllPatientsSvc(patientRepository);
const getPatientByIdSvc = new GetPatientByIdSvc(patientRepository);

export { createPatientSvc, getAllPatientsSvc, getPatientByIdSvc };

// export class PatientSvcs {
//   static patientRepository = new PatientRepository();

//   static create = new CreatePatientSvc(this.patientRepository);
// }
