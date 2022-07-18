import { ScheduleRepository } from "../../repositories/implementations/schedules";

import { CreateScheduleSvc } from "./createSchedule.svc";
import { DeleteScheduleByIdSvc } from "./deleteSchedule.svc";
import { GetAllSchedulesSvc } from "./getAllSchedules.svc";
import { GetScheduleByIdSvc } from "./getScheduleById.svc";
import { PatchScheduleByIdSvc } from "./patchScheduleById.svc";

const scheduleRepository = new ScheduleRepository();

const createScheduleSvc = new CreateScheduleSvc(scheduleRepository);
const getAllSchedulesSvc = new GetAllSchedulesSvc(scheduleRepository);
const getScheduleByIdSvc = new GetScheduleByIdSvc(scheduleRepository);
const patchScheduleById = new PatchScheduleByIdSvc(scheduleRepository);
const deleteScheduleById = new DeleteScheduleByIdSvc(scheduleRepository);

export {
  createScheduleSvc,
  getAllSchedulesSvc,
  getScheduleByIdSvc,
  patchScheduleById,
  deleteScheduleById,
};
