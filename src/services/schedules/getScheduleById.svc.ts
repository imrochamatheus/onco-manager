import {
  ISchedule,
  IScheduleByIdReq,
} from "../../interfaces/schedules.interface";
import { IScheduleRepository } from "../../repositories/implementations/schedules/IScheduleRepository";

class GetScheduleByIdSvc {
  constructor(private scheduleRepository: IScheduleRepository) {}

  async execute({ schedule_id }: IScheduleByIdReq): Promise<ISchedule | null> {
    return await this.scheduleRepository.getScheduleById({ schedule_id });
  }
}

export { GetScheduleByIdSvc };
