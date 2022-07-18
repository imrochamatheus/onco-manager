import { Request, Response } from "express";
import { GetScheduleByIdSvc } from "../../services/schedules/getScheduleById.svc";

class GetScheduleByIdCtrl {
  constructor(private getScheduleByIdSvc: GetScheduleByIdSvc) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const schedule_id = req.params.id;
    const scheduleById = await this.getScheduleByIdSvc.execute({ schedule_id });

    return res.status(200).json(scheduleById);
  }
}

export { GetScheduleByIdCtrl };
