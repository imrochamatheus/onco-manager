import { Request, Response, NextFunction } from "express";
import { DeletePatientByIdSvc } from "../../services/patients/deletePatientById.svc";

class DeletePatientByIdCtrl {
  constructor(private deletePatientByIdSvc: DeletePatientByIdSvc) {}

  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    const patient_id = req.params.id;

    try {
      await this.deletePatientByIdSvc.execute({ patient_id });

      return res.status(200).json({
        message: "Patient Successfully Deleted",
      });
    } catch (error) {
      next(error);
    }
  }
}

export { DeletePatientByIdCtrl };
