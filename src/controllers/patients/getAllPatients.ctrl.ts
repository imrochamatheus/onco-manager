import { Request, Response } from "express";
import { GetAllPatientsSvc } from "../../services/patients/getAllPatients.svc";

export class GetAllPatientsCtrl {
  constructor(private getAllPatientSvc: GetAllPatientsSvc) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const allPatients = await this.getAllPatientSvc.execute();
    return res.status(200).json(allPatients);
  }
}
