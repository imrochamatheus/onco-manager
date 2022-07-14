import { createSeatService } from "../../services/seats";
import { CreateSeatController } from "./createSeat.ctrl";


const createSeatController = new CreateSeatController(createSeatService);


export { createSeatController }