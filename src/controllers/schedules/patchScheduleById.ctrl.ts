import { Request, Response, NextFunction } from "express";
import { PatchScheduleByIdSvc } from "../../services/schedules/patchScheduleById.svc";

class PatchScheduleByIdCtrl {
  constructor(private patchScheduleById: PatchScheduleByIdSvc) {}

  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const schedule_id = req.params.id;
    const schedule_data = req.body;

    try {
      await this.patchScheduleById.execute({ schedule_id }, schedule_data);

      return res.status(200).json({
        message: "Schedule Succesfully Patched",
      });
    } catch (error) {
      next(error);
    }
  }
}
export { PatchScheduleByIdCtrl };
