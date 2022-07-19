import {
  createScheduleSvc,
  deleteScheduleByIdSvc,
  getAllSchedulesSvc,
  getScheduleByDateSvc,
  getScheduleByIdSvc,
  patchScheduleByIdSvc,
} from "../../services/schedules";

import { CreateScheduleCtrl } from "./createSchedule.ctrl";
import { DeleteScheduleByIdCtrl } from "./deleteScheduleById.ctrl";
import { GetAllSchedulesCtrl } from "./getAllSchedules.ctrl";
import { GetScheduleByDateCtrl } from "./getScheduleByDate.ctrl";
import { GetScheduleByIdCtrl } from "./getScheduleById.ctrl";
import { PatchScheduleByIdCtrl } from "./patchScheduleById.ctrl";

const createScheduleCtrl = new CreateScheduleCtrl(createScheduleSvc);
const getAllSchedulesCtrl = new GetAllSchedulesCtrl(getAllSchedulesSvc);
const getScheduleByIdCtrl = new GetScheduleByIdCtrl(getScheduleByIdSvc);
const getScheduleByDateCtrl = new GetScheduleByDateCtrl(getScheduleByDateSvc);
const patchScheduleByIdCtrl = new PatchScheduleByIdCtrl(patchScheduleByIdSvc);
const deleteScheduleByIdCtrl = new DeleteScheduleByIdCtrl(
  deleteScheduleByIdSvc
);

export {
  createScheduleCtrl,
  getAllSchedulesCtrl,
  getScheduleByIdCtrl,
  getScheduleByDateCtrl,
  patchScheduleByIdCtrl,
  deleteScheduleByIdCtrl,
};
