"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePatientByIdCtrl = exports.patchPatientByIdCtrl = exports.getPatientByIdCtrl = exports.getAllPatientsCtrl = exports.createPatientCtrl = void 0;
const patients_1 = require("../../services/patients");
const createPatient_ctrl_1 = require("./createPatient.ctrl");
const deletePatientById_ctrl_1 = require("./deletePatientById.ctrl");
const getAllPatients_ctrl_1 = require("./getAllPatients.ctrl");
const getPatientById_ctrl_1 = require("./getPatientById.ctrl");
const patchPatientById_ctrl_1 = require("./patchPatientById.ctrl");
const createPatientCtrl = new createPatient_ctrl_1.CreatePatientCtrl(patients_1.createPatientSvc);
exports.createPatientCtrl = createPatientCtrl;
const getAllPatientsCtrl = new getAllPatients_ctrl_1.GetAllPatientsCtrl(patients_1.getAllPatientsSvc);
exports.getAllPatientsCtrl = getAllPatientsCtrl;
const getPatientByIdCtrl = new getPatientById_ctrl_1.GetPatientByIdCtrl(patients_1.getPatientByIdSvc);
exports.getPatientByIdCtrl = getPatientByIdCtrl;
const patchPatientByIdCtrl = new patchPatientById_ctrl_1.PatchPatientByIdCtrl(patients_1.patchPatientByIdSvc);
exports.patchPatientByIdCtrl = patchPatientByIdCtrl;
const deletePatientByIdCtrl = new deletePatientById_ctrl_1.DeletePatientByIdCtrl(patients_1.deletePatientByIdSvc);
exports.deletePatientByIdCtrl = deletePatientByIdCtrl;
// export class PatientCtrls {
//   static create = new CreatePatientCtrl(PatientSvcs.create);
// }
//# sourceMappingURL=index.js.map