import {
  IScheduleByIdReq,
  ISchedulePatch,
} from "../../interfaces/schedules.interface";
import { IScheduleRepository } from "../../repositories/implementations/schedules/IScheduleRepository";

class PatchScheduleByIdSvc {
  constructor(private scheduleRepository: IScheduleRepository) {}

  async execute(
    { schedule_id }: IScheduleByIdReq,
    data: ISchedulePatch
  ): Promise<void> {
    return await this.scheduleRepository.patchScheduleById(
      { schedule_id },
      data
    );
  }
}
export { PatchScheduleByIdSvc };
