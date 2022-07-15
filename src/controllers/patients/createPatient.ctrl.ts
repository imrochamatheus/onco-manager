import { Request, Response } from "express";
import { CreatePatientSvc } from "../../services/patients/createPatient.svc";

export class CreatePatientCtrl {
  constructor(private createPatientSvc: CreatePatientSvc) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const patientdata = { ...req.body };

    const newPatient = await this.createPatientSvc.execute(patientdata);

    return res.status(201).json({
      message: "Patient Succesfully Created",
      data: newPatient,
    });
  }
}
