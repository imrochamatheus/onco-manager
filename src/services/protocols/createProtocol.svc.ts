import {
  IProtocolCreate,
  IProtocol,
} from "../../interfaces/protocols.interfaces";
import { IProtocolReposity } from "../../repositories/implementations/protocols/IProtocolsRepository";

class CreateProtocolService {
  constructor(private protocolRepository: IProtocolReposity) {}

  async execute(protocolData: IProtocolCreate): Promise<IProtocol> {
    const createProtocol = await this.protocolRepository.createProtocol(
      protocolData
    );

    return createProtocol;
  }
}

export { CreateProtocolService };
