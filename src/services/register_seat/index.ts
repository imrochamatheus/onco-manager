import { RegisterSeatRepository } from "../../repositories/implementations/register_seat";
import { CreateRegisterSeatService } from "./createRegisterSeat.svc";
import { ListPatientHistoryService } from "./listPatientHistory.svr";
import { ListRelatoriesService } from "./listRelatories.svc";
import { UpdateRegisterSeatService } from "./updateRegisterSeat.svc";

const registerSeatRepository = new RegisterSeatRepository();

const createRegisterSeatService = new CreateRegisterSeatService(
  registerSeatRepository
);
const listRelatoriesService = new ListRelatoriesService(registerSeatRepository);
const listPatientHistoryService = new ListPatientHistoryService(
  registerSeatRepository
);
const updateRegisterSeatService = new UpdateRegisterSeatService(
  registerSeatRepository
);

export {
  createRegisterSeatService,
  listRelatoriesService,
  listPatientHistoryService,
  updateRegisterSeatService,
};
