import { IProtocol } from "../../interfaces/protocols.interfaces";
import { IProtocolReposity } from "../../repositories/implementations/protocols/IProtocolsRepository.js";

class ListAllProtocolsService {
  constructor(private protocolRepository: IProtocolReposity) {}

  async execute(): Promise<IProtocol[]> {
    const protocols = await this.protocolRepository.listAllProtocols();

    return protocols;
  }
}

export { ListAllProtocolsService };
