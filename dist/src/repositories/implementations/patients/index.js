"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientRepository = void 0;
const client_1 = require("@prisma/client");
class PatientRepository {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    createPatient({ name, medical_records_number, contact, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const newPatient = yield this.prisma.patient.create({
                data: {
                    name,
                    medical_records_number,
                    contact,
                },
            });
            return newPatient;
        });
    }
    getAllPatients() {
        return __awaiter(this, void 0, void 0, function* () {
            const allPatients = yield this.prisma.patient.findMany();
            return allPatients;
        });
    }
    getPatientById({ patient_id, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const patient = yield this.prisma.patient.findUnique({
                where: { id: patient_id },
            });
            return patient;
        });
    }
    patchPatientById({ patient_id }, data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.prisma.patient.update({
                where: { id: patient_id },
                data: Object.assign({}, data),
            });
        });
    }
    deletePatientById({ patient_id, }) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.prisma.patient.delete({ where: { id: patient_id } });
        });
    }
}
exports.PatientRepository = PatientRepository;
//# sourceMappingURL=index.js.map