import { ScheduleRepository } from "../../repositories/implementations/schedules";

import { CreateScheduleSvc } from "./createSchedule.svc";
import { DeleteScheduleByIdSvc } from "./deleteSchedule.svc";
import { GetAllSchedulesSvc } from "./getAllSchedules.svc";
import { GetScheduleByDateSvc } from "./getScheduleByDate.svc";
import { GetScheduleByIdSvc } from "./getScheduleById.svc";
import { PatchScheduleByIdSvc } from "./patchScheduleById.svc";

const scheduleRepository = new ScheduleRepository();

const createScheduleSvc = new CreateScheduleSvc(scheduleRepository);
const getAllSchedulesSvc = new GetAllSchedulesSvc(scheduleRepository);
const getScheduleByIdSvc = new GetScheduleByIdSvc(scheduleRepository);
const getScheduleByDateSvc = new GetScheduleByDateSvc(scheduleRepository);
const patchScheduleByIdSvc = new PatchScheduleByIdSvc(scheduleRepository);
const deleteScheduleByIdSvc = new DeleteScheduleByIdSvc(scheduleRepository);

export {
  createScheduleSvc,
  getAllSchedulesSvc,
  getScheduleByIdSvc,
  getScheduleByDateSvc,
  patchScheduleByIdSvc,
  deleteScheduleByIdSvc,
};
