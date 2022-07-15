import { createPatientSvc } from "../../services/patients";
import { CreatePatientCtrl } from "./createPatient.ctrl";

const createPatientCtrl = new CreatePatientCtrl(createPatientSvc);
// const getAllPatientsCtrl = new GetAllPatientsCtrl(getAllPatientsSvc);
// const getPatientByIdCtrl = new GetPatientByIdCtrl(getPatientByIdSvc);
// const patchPatientByIdCtrl = new PatchPatientByIdCtrl(createPatientByIdSvc);
// const deletePatientByIdCtrl = new DeletePatientByIdCtrl(deletePatientByIdSvc);

export {
  createPatientCtrl,
  // getAllPatientsCtrl,
  // getPatientByIdCtrl,
  // patchPatientByIdCtrl,
  // deletePatientByIdCtrl,
};
