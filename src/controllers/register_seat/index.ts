import { createRegisterSeatService, listRelatoriesService } from "../../services/register_seat";
import { CreateRegisterSeatController } from "./createRegisterSeat.ctrl";
import { ListRelatoriesController } from "./listRelatories.ctrl";


const createRegisterSeatController = new CreateRegisterSeatController(createRegisterSeatService);
const listRelatoriesController = new ListRelatoriesController(listRelatoriesService);


export { createRegisterSeatController, listRelatoriesController };