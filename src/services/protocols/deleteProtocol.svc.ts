import { IProtocolReposity } from "../../repositories/implementations/protocols/IProtocolsRepository";

class DeleteProtocolService {
  constructor(private protocolRepository: IProtocolReposity) {}

  async execute(id: number): Promise<void> {
    await this.protocolRepository.deleteProtocol(id);
  }
}

export { DeleteProtocolService };
