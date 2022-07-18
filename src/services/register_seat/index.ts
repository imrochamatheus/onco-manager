import { RegisterSeatRepository } from "../../repositories/implementations/register_seat";
import { CreateRegisterSeatService } from "./createRegisterSeat.svc";
import { ListPatientHistoryService } from "./listPatientHistory.svc";
import { ListRelatoriesService } from "./listRelatories.svc";

const registerSeatRepository = new RegisterSeatRepository();

const createRegisterSeatService = new CreateRegisterSeatService(
  registerSeatRepository
);
const listRelatoriesService = new ListRelatoriesService(registerSeatRepository);
const listPatientHistoryService = new ListPatientHistoryService(
  registerSeatRepository
);

export {
  createRegisterSeatService,
  listRelatoriesService,
  listPatientHistoryService,
};
