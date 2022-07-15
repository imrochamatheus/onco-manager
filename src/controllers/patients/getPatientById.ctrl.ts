import { Request, Response } from "express";
import { GetPatientByIdSvc } from "../../services/patients/getPatientById.svc";

class GetPatientByIdCtrl {
  constructor(private getPatientsByIdSvc: GetPatientByIdSvc) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const patient_id = req.params.id;
    const patient = await this.getPatientsByIdSvc.execute({ patient_id });

    return res.status(200).json(patient);
  }
}

export { GetPatientByIdCtrl };
