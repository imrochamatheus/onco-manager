import { Request, Response, NextFunction } from "express";
import { PatchPatientByIdSvc } from "../../services/patients/patchPatientById.svc";
import AppError from "../../errors/AppError";

class PatchPatientByIdCtrl {
  constructor(private patchPatientByIdSvc: PatchPatientByIdSvc) {}

  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const { patient_id } = req.params;
    const patient_data = req.body;

    delete req.body.full_name;

    try {
      await this.patchPatientByIdSvc.execute({ patient_id }, patient_data);

      return res.status(200).json({
        message: "Patient Succesfully Patched",
      });
    } catch (error) {
      next(error);
    }
  }
}

export { PatchPatientByIdCtrl };
