import { Request, Response } from "express";
import { GetScheduleByDateSvc } from "../../services/schedules/getScheduleByDate.svc";

class GetScheduleByDateCtrl {
  constructor(private getScheduleByDateSvc: GetScheduleByDateSvc) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const schedule_date = req.params.schedule_date;
    const scheduleBydate = await this.getScheduleByDateSvc.execute({
      schedule_date,
    });

    return res.status(200).json(scheduleBydate);
  }
}

export { GetScheduleByDateCtrl };
