import { createSeatService, listAllSeatsService } from "../../services/seats";
import { CreateSeatController } from "./createSeat.ctrl";
import { ListAllSeatsController } from "./listAllSeat.ctrl";


const createSeatController = new CreateSeatController(createSeatService);
const listAllSeatsController = new ListAllSeatsController(listAllSeatsService);


export { createSeatController, listAllSeatsController }