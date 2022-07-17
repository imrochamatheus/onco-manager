import { RegisterSeatRepository } from "../../repositories/implementations/register_seat";
import { CreateRegisterSeatService } from "./createRegisterSeat.svc";
import { ListRelatoriesService } from "./listRelatories.svc";

const registerSeatRepository = new RegisterSeatRepository();

const createRegisterSeatService = new CreateRegisterSeatService(
  registerSeatRepository
);
const listRelatoriesService = new ListRelatoriesService(registerSeatRepository);

export { createRegisterSeatService, listRelatoriesService };
