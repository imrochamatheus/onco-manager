import { ProtocolsRepository } from "../../repositories/implementations/protocols";

import { CreateProtocolService } from "./createProtocol.svc";
import { ListAllProtocolsService } from "./listProtocols.svc";
import { ReadProtocolService } from "./readProtocol.svc";
import { UpdateProtocolService } from "./updateProtocol.svc";
import { DeleteProtocolService } from "./deleteProtocol.svc";

const protocolsRepository = new ProtocolsRepository();

const createProtocolService = new CreateProtocolService(protocolsRepository);
const listAllProtocolsService = new ListAllProtocolsService(
  protocolsRepository
);
const readOneProtocolService = new ReadProtocolService(protocolsRepository);
const updateProtocolService = new UpdateProtocolService(protocolsRepository);
const deleteProtocolServie = new DeleteProtocolService(protocolsRepository);

export { createProtocolService, listAllProtocolsService, readOneProtocolService, updateProtocolService, deleteProtocolServie}
