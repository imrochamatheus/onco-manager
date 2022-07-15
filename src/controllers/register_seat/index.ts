import { createRegisterSeatService } from "../../services/register_seat";
import { CreateRegisterSeatController } from "./createRegisterSeat.ctrl";


const createRegisterSeatController = new CreateRegisterSeatController(createRegisterSeatService);


export { createRegisterSeatController };