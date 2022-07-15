import { Request, Response } from "express";
import { PatchPatientByIdSvc } from "../../services/patients/patchPatientById.svc";

class PatchPatientByIdCtrl {
  constructor(private patchPatientByIdSvc: PatchPatientByIdSvc) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const patient_id = req.params.id;
    const patient_data = req.body;

    await this.patchPatientByIdSvc.execute({ patient_id }, patient_data);

    return res.status(200).json({
      message: "Patient Succesfully Patched",
    });
  }
}

export { PatchPatientByIdCtrl };
