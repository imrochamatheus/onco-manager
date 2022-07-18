import {
  ISchedule,
  IScheduleByIdReq,
  IScheduleCreate,
  ISchedulePatch,
} from "../../../interfaces/schedules.interface";

interface IScheduleRepository {
  createSchedule({
    id_patient,
    id_protocol,
    cicle_number,
    date,
  }: IScheduleCreate): Promise<ISchedule>;

  getAllSchedules(): Promise<ISchedule[]>;

  getScheduleById({ schedule_id }: IScheduleByIdReq): Promise<ISchedule | null>;

  patchScheduleById(
    { schedule_id }: IScheduleByIdReq,
    data: ISchedulePatch
  ): Promise<void>;

  deleteScheduleById({ schedule_id }: IScheduleByIdReq): Promise<void>;
}

export { IScheduleRepository };
