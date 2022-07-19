import {
  ISchedule,
  IScheduleByDate,
} from "../../interfaces/schedules.interface";
import { IScheduleRepository } from "../../repositories/implementations/schedules/IScheduleRepository";

class GetScheduleByDateSvc {
  constructor(private scheduleRepository: IScheduleRepository) {}

  async execute({
    schedule_date,
  }: IScheduleByDate): Promise<ISchedule[] | void> {
    return await this.scheduleRepository.getScheduleByDate({ schedule_date });
  }
}

export { GetScheduleByDateSvc };
