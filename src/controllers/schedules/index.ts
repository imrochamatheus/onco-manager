import {
  createScheduleSvc,
  deleteScheduleById,
  getAllSchedulesSvc,
  getScheduleByIdSvc,
  patchScheduleById,
} from "../../services/schedules";

import { CreateScheduleCtrl } from "./createSchedule.ctrl";
import { DeleteScheduleByIdCtrl } from "./deleteScheduleById.ctrl";
import { GetAllSchedulesCtrl } from "./getAllSchedules.ctrl";
import { GetScheduleByIdCtrl } from "./getScheduleById.ctrl";
import { PatchScheduleByIdCtrl } from "./patchScheduleById";

const createScheduleCtrl = new CreateScheduleCtrl(createScheduleSvc);
const getAllSchedulesCtrl = new GetAllSchedulesCtrl(getAllSchedulesSvc);
const getScheduleByIdCtrl = new GetScheduleByIdCtrl(getScheduleByIdSvc);
const patchScheduleByIdCtrl = new PatchScheduleByIdCtrl(patchScheduleById);
const deleteScheduleByIdCtrl = new DeleteScheduleByIdCtrl(deleteScheduleById);

export {
  createScheduleCtrl,
  getAllSchedulesCtrl,
  getScheduleByIdCtrl,
  patchScheduleByIdCtrl,
  deleteScheduleByIdCtrl,
};
