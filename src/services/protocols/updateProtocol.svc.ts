import { IProtocolUpdate } from "../../interfaces/protocols.interfaces";
import { IProtocolReposity } from "../../repositories/implementations/IProtocolsRepository";

class UpdateProtocolService {
  constructor(private protocolRepository: IProtocolReposity) {}

  async execute(protocol_id: number, data: IProtocolUpdate): Promise<void> {
    await this.protocolRepository.updateProtocol(protocol_id, data);
  }
}

export { UpdateProtocolService };
