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
exports.PatchPatientByIdCtrl = void 0;
class PatchPatientByIdCtrl {
    constructor(patchPatientByIdSvc) {
        this.patchPatientByIdSvc = patchPatientByIdSvc;
    }
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const patient_id = req.params.id;
            const patient_data = req.body;
            yield this.patchPatientByIdSvc.execute({ patient_id }, patient_data);
            return res.status(200).json({
                message: "Patient Succesfully Patched",
            });
        });
    }
}
exports.PatchPatientByIdCtrl = PatchPatientByIdCtrl;
//# sourceMappingURL=patchPatientById.ctrl.js.map