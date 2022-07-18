import { Request, Response } from "express";
import { GetAllSchedulesSvc } from "../../services/schedules/getAllSchedules.svc";

class GetAllSchedulesCtrl {
  constructor(private getAllSchedulesSvc: GetAllSchedulesSvc) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const allSchedules = await this.getAllSchedulesSvc.execute();

    return res.status(200).json(allSchedules);
  }
}
export { GetAllSchedulesCtrl };
