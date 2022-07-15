"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patientsRouter = void 0;
const express_1 = require("express");
// import { PatientCtrls } from "../../controllers/patients";
const patients_1 = require("../../controllers/patients");
const patientsRouter = (0, express_1.Router)();
exports.patientsRouter = patientsRouter;
//create patient
patientsRouter.post("/", (req, res) => {
    patients_1.createPatientCtrl.handle(req, res);
    // PatientCtrls.create.handle(req, res);
});
//get all patients
patientsRouter.get("/", (req, res) => {
    patients_1.getAllPatientsCtrl.handle(req, res);
});
//get patient by id
patientsRouter.get("/:id", (req, res) => {
    patients_1.getPatientByIdCtrl.handle(req, res);
});
//edit patient by id
patientsRouter.patch("/:id", (req, res) => {
    patients_1.patchPatientByIdCtrl.handle(req, res);
});
//delete patient by id
patientsRouter.delete("/:id", (req, res) => {
    patients_1.deletePatientByIdCtrl.handle(req, res);
});
//# sourceMappingURL=index.js.map