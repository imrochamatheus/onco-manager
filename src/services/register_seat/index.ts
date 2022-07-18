import { RegisterSeatRepository } from "../../repositories/implementations/register_seat";
import { CreateRegisterSeatService } from "./createRegisterSeat.svc";
import { ListPatientHistoryService } from "./listPatientHistory.svc";
import { ListRelatoriesService } from "./listRelatories.svc";
import { UpdateRegisterSeatService } from "./updateRegisterSeat.svr";

const registerSeatRepository = new RegisterSeatRepository();
const listRelatoriesService = new ListRelatoriesService(registerSeatRepository);
const createRegisterSeatService = new CreateRegisterSeatService(
  registerSeatRepository
);
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
