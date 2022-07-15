import { SeatsRepository } from "../../repositories/implementations/seats";
import { CreateSeatService } from "./createSeat.svc";
import { DeleteSeatService } from "./deleteSeat.svc";
import { ListAllSeatsService } from "./listAllSeats.svc";

const seatsRepository = new SeatsRepository();

const createSeatService = new CreateSeatService(seatsRepository);
const listAllSeatsService = new ListAllSeatsService(seatsRepository);
const deleteSeatService = new DeleteSeatService(seatsRepository);

export { createSeatService, listAllSeatsService, deleteSeatService };
