import { Request, Response } from "express";
import { PatchScheduleByIdSvc } from "../../services/schedules/patchScheduleById";

class PatchScheduleByIdCtrl {
  constructor(private patchScheduleById: PatchScheduleByIdSvc) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const schedule_id = req.params.id;
    const schedule_data = req.body;

    await this.patchScheduleById.execute({ schedule_id }, schedule_data);

    return res.json(200).json({
      message: "Schedule Succesfully Patched",
    });
  }
}
export { PatchScheduleByIdCtrl };
