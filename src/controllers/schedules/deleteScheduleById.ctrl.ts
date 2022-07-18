import { Request, Response } from "express";
import { DeleteScheduleByIdSvc } from "../../services/schedules/deleteSchedule.svc";

class DeleteScheduleByIdCtrl {
  constructor(private deleteScheduleByIdSvc: DeleteScheduleByIdSvc) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const schedule_id = req.params.id;

    await this.deleteScheduleByIdSvc.execute({ schedule_id });

    return res.status(200).json({
      message: "Schedule Successfully Deleted",
    });
  }
}

export { DeleteScheduleByIdCtrl };
