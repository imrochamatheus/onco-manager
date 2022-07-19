import {
  createRegisterSeatService,
  listPatientHistoryService,
  listRelatoriesService,
  updateRegisterSeatService,
} from "../../services/register_seat";
import { ListRelatoriesController } from "./listRelatories.ctrl";
import { CreateRegisterSeatController } from "./createRegisterSeat.ctrl";
import { ListPatientHistoryController } from "./listPatientHistory.ctrl";
import { UpdateRegisterSeatController } from "./updateRegisterSeat.ctrl";

const createRegisterSeatController = new CreateRegisterSeatController(
  createRegisterSeatService
);
const listRelatoriesController = new ListRelatoriesController(
  listRelatoriesService
);

const listPatientHistoryController = new ListPatientHistoryController(
  listPatientHistoryService
);

const updateRegisterSeatController = new UpdateRegisterSeatController(
  updateRegisterSeatService
);

export {
  createRegisterSeatController,
  listRelatoriesController,
  listPatientHistoryController,
  updateRegisterSeatController,
};
