import { ISchedule } from "../../interfaces/schedules.interface";
import { IScheduleRepository } from "../../repositories/implementations/schedules/IScheduleRepository";

class GetAllSchedulesSvc {
  constructor(private scheduleRepository: IScheduleRepository) {}

  async execute(): Promise<ISchedule[]> {
    return await this.scheduleRepository.getAllSchedules();
  }
}
export { GetAllSchedulesSvc };
