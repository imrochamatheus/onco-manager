import { RegisterSeatRepository } from "../../repositories/implementations/register_seat";
import { CreateRegisterSeatService } from "./createRegisterSeat.svc";


const registerSeatRepository = new RegisterSeatRepository();

const createRegisterSeatService = new CreateRegisterSeatService(registerSeatRepository);


export { createRegisterSeatService };