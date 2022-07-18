import { Request, Response, NextFunction } from "express";
import { ListPatientHistoryService } from "../../services/register_seat/listPatientHistory.svc";

export class ListPatientHistoryController {
  constructor(private listPatientHistoryService: ListPatientHistoryService) {}

  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const patient_id = req.params.patient_id;

    try {
      const history = await this.listPatientHistoryService.execute({
        patient_id,
      });

      return res.status(200).json(history);
    } catch (error) {
      next(error);
    }
  }
}
