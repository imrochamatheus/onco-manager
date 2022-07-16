import { Request, Response, NextFunction } from "express";
import { GetPatientByIdSvc } from "../../services/patients/getPatientById.svc";

class GetPatientByIdCtrl {
  constructor(private getPatientsByIdSvc: GetPatientByIdSvc) {}
  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    const patient_id = req.params.id;
    try {
      const patient = await this.getPatientsByIdSvc.execute({ patient_id });

      return res.status(200).json(patient);
    } catch (error) {
      next(error);
    }
  }
}

export { GetPatientByIdCtrl };
