import { Request, Response, NextFunction } from "express";
import { CreatePatientSvc } from "../../services/patients/createPatient.svc";

class CreatePatientCtrl {
  constructor(private createPatientSvc: CreatePatientSvc) {}

  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const patientdata = { ...req.body };

    try {
      const newPatient = await this.createPatientSvc.execute(patientdata);

      return res.status(201).json({
        message: "Patient Succesfully Created",
        data: newPatient,
      });
    } catch (error) {
      next(error);
    }
  }
}

export { CreatePatientCtrl };
