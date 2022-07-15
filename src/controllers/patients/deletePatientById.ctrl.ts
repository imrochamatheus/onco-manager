import { Request, Response } from "express";
import { DeletePatientByIdSvc } from "../../services/patients/deletePatientById.svc";

class DeletePatientByIdCtrl {
  constructor(private deletePatientByIdSvc: DeletePatientByIdSvc) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const patient_id = req.params.id;

    await this.deletePatientByIdSvc.execute({ patient_id });

    return res.status(200).json({
      message: "Patient Successfully Deleted",
    });
  }
}

export { DeletePatientByIdCtrl };
