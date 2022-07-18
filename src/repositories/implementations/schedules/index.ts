import { PrismaClient } from "@prisma/client";
import AppError from "../../../errors/AppError";
import {
  ISchedule,
  IScheduleByIdReq,
  IScheduleCreate,
  ISchedulePatch,
} from "../../../interfaces/schedules.interface";
import { IScheduleRepository } from "./IScheduleRepository";

class ScheduleRepository implements IScheduleRepository {
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async createSchedule({
    id_protocol,
    id_patient,
    cicle_number,
    date,
  }: IScheduleCreate): Promise<ISchedule> {
    const newSchedule = await this.prisma.schedule.create({
      data: {
        id_protocol,
        id_patient,
        cicle_number,
        date,
      },
    });

    return newSchedule;
  }

  public async getAllSchedules(): Promise<ISchedule[]> {
    const allSchedules = await this.prisma.schedule.findMany();
    return allSchedules;
  }

  public async getScheduleById({
    schedule_id,
  }: IScheduleByIdReq): Promise<ISchedule | null> {
    const schedule = await this.prisma.schedule.findUnique({
      where: { id: schedule_id },
    });
    return schedule;
  }

  public async patchScheduleById(
    { schedule_id }: IScheduleByIdReq,
    data: ISchedulePatch
  ): Promise<void> {
    await this.prisma.schedule.update({
      where: { id: schedule_id },
      data: { ...data },
    });
  }

  public async deleteScheduleById({
    schedule_id,
  }: IScheduleByIdReq): Promise<void> {
    await this.prisma.schedule.delete({ where: { id: schedule_id } });
  }
}

export { ScheduleRepository };
