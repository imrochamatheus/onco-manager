import {
  createRegisterSeatService,
  listPatientHistoryService,
  listRelatoriesService,
} from "../../services/register_seat";
import { CreateRegisterSeatController } from "./createRegisterSeat.ctrl";
import { ListPatientHistoryController } from "./listPatientHistory.ctrl";
import { ListRelatoriesController } from "./listRelatories.ctrl";

const createRegisterSeatController = new CreateRegisterSeatController(
  createRegisterSeatService
);
const listRelatoriesController = new ListRelatoriesController(
  listRelatoriesService
);
const listPatientHistoryController = new ListPatientHistoryController(
  listPatientHistoryService
);

export {
  createRegisterSeatController,
  listRelatoriesController,
  listPatientHistoryController,
};
