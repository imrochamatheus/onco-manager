import {
  createProtocolService,
  deleteProtocolService,
  listAllProtocolsService,
  readOneProtocolService,
  updateProtocolService,
} from "../../services/protocols";
import { GetProtocolById } from "./getProtocolById.ctrl";
import { ListProtocolsController } from "./listProtocols.ctrl";
import { CreateProtocolController } from "./createProtocol.ctrl";
import { DeleteProtocolController } from "./deleteProtocol.ctrl";
import { PatchProtocolByIdController } from "./patchProtocolById.ctrl";

const getProtocolById = new GetProtocolById(readOneProtocolService);
const deleteProtocolController = new DeleteProtocolController(
  deleteProtocolService
);
const createProtocolController = new CreateProtocolController(
  createProtocolService
);
const listProtocolsController = new ListProtocolsController(
  listAllProtocolsService
);
const patchProtocolByIdController = new PatchProtocolByIdController(
  updateProtocolService
);

export {
  getProtocolById,
  listProtocolsController,
  createProtocolController,
  deleteProtocolController,
  patchProtocolByIdController,
};
