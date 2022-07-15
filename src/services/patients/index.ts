import { PatientRepository } from "../../repositories/implementations/IPatientRepository";
import { CreatePatientSvc } from "./createPatient.svc";

const patientRepository = new PatientRepository();

const createPatientSvc = new CreatePatientSvc(patientRepository);

export { createPatientSvc };
