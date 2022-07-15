import {
  IProtocolCreate,
  IProtocol,
} from "../../interfaces/protocols.interfaces";
import { IProtocolReposity } from "../../repositories/implementations/IProtocolsRepository";

class CreateProtocolService {
  constructor(private protocolRepository: IProtocolReposity) {}

  async execute({
    name,
    description,
    volume,
    infusion_time,
  }: IProtocolCreate): Promise<IProtocol> {
    const createProtocol = await this.protocolRepository.createProtocol({
      name,
      description,
      volume,
      infusion_time,
    });

    return createProtocol;
  }
}

export { CreateProtocolService };
