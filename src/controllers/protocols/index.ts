import {
  createProtocolService,
  listAllProtocolsService,
} from "../../services/protocols";
import { CreateProtocolController } from "./createProtocol.ctrl";
import { ListProtocolsController } from "./listProtocols.ctrl";

const createProtocolController = new CreateProtocolController(
  createProtocolService
);
const listProtocolsController = new ListProtocolsController(
  listAllProtocolsService
);

export { createProtocolController, listProtocolsController };
