import { IProtocolUpdate } from "../../interfaces/protocols.interfaces";
import { IProtocolReposity } from "../../repositories/implementations/protocols/IProtocolsRepository.js";

class UpdateProtocolService {
  constructor(private protocolRepository: IProtocolReposity) {}

  async execute(id: number, data: IProtocolUpdate): Promise<void> {
    await this.protocolRepository.updateProtocol(id, data);
  }
}

export { UpdateProtocolService };
