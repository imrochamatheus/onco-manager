import { IScheduleByIdReq } from "../../interfaces/schedules.interface";
import { IScheduleRepository } from "../../repositories/implementations/schedules/IScheduleRepository";

class DeleteScheduleByIdSvc {
  constructor(private scheduleRepository: IScheduleRepository) {}

  async execute({ schedule_id }: IScheduleByIdReq): Promise<void> {
    return await this.scheduleRepository.deleteScheduleById({ schedule_id });
  }
}

export { DeleteScheduleByIdSvc };
