import { IProtocol } from "../../interfaces/protocols.interfaces";
import { IProtocolReposity } from "../../repositories/implementations/protocols/IProtocolsRepository";

class ReadProtocolService {
  constructor(private protocolRepository: IProtocolReposity) {}

  async execute(protocol_id: number): Promise<IProtocol | null> {
    const protocol = await this.protocolRepository.readOneProtocol(protocol_id);

    return protocol;
  }
}

export { ReadProtocolService };
