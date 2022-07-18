import { NextFunction, Request, Response } from "express";
import { CreateScheduleSvc } from "../../services/schedules/createSchedule.svc";

class CreateScheduleCtrl {
  constructor(private createScheduleSvc: CreateScheduleSvc) {}

  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const scheduleData = { ...req.body };

    try {
      const newSchedule = await this.createScheduleSvc.execute(scheduleData);
      return res.status(201).json({
        message: "Schedule Succesfully Created",
        data: newSchedule,
      });
    } catch (error) {
      next(error);
    }
  }
}
export { CreateScheduleCtrl };
