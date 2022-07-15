"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePatientByIdSvc = exports.patchPatientByIdSvc = exports.getPatientByIdSvc = exports.getAllPatientsSvc = exports.createPatientSvc = void 0;
const patients_1 = require("../../repositories/implementations/patients");
const createPatient_svc_1 = require("./createPatient.svc");
const deletePatientById_svc_1 = require("./deletePatientById.svc");
const getAllPatients_svc_1 = require("./getAllPatients.svc");
const getPatientById_svc_1 = require("./getPatientById.svc");
const patchPatientById_svc_1 = require("./patchPatientById.svc");
const patientRepository = new patients_1.PatientRepository();
const createPatientSvc = new createPatient_svc_1.CreatePatientSvc(patientRepository);
exports.createPatientSvc = createPatientSvc;
const getAllPatientsSvc = new getAllPatients_svc_1.GetAllPatientsSvc(patientRepository);
exports.getAllPatientsSvc = getAllPatientsSvc;
const getPatientByIdSvc = new getPatientById_svc_1.GetPatientByIdSvc(patientRepository);
exports.getPatientByIdSvc = getPatientByIdSvc;
const patchPatientByIdSvc = new patchPatientById_svc_1.PatchPatientByIdSvc(patientRepository);
exports.patchPatientByIdSvc = patchPatientByIdSvc;
const deletePatientByIdSvc = new deletePatientById_svc_1.DeletePatientByIdSvc(patientRepository);
exports.deletePatientByIdSvc = deletePatientByIdSvc;
// export class PatientSvcs {
//   static patientRepository = new PatientRepository();
//   static create = new CreatePatientSvc(this.patientRepository);
// }
//# sourceMappingURL=index.js.map