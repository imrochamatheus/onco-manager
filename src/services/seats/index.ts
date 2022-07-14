import { SeatsRepository } from "../../repositories/implementations/seats";
import { CreateSeatService } from "./createSeat.svc";


const seatsRepository = new SeatsRepository();

const createSeatService = new CreateSeatService(seatsRepository);


export { createSeatService }