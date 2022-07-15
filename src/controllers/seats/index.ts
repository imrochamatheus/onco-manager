import { createSeatService, deleteSeatService, listAllSeatsService } from "../../services/seats";
import { CreateSeatController } from "./createSeat.ctrl";
import { DeleteSeatController } from "./deleteSeat.ctrl";
import { ListAllSeatsController } from "./listAllSeat.ctrl";


const createSeatController = new CreateSeatController(createSeatService);
const listAllSeatsController = new ListAllSeatsController(listAllSeatsService);
const deleteSeatController = new DeleteSeatController(deleteSeatService);


export { createSeatController, listAllSeatsController, deleteSeatController }