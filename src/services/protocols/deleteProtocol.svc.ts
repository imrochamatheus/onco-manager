import { IProtocolReposity } from "../../repositories/implementations/IProtocolsRepository";

class DeleteProtocolService {
    constructor(private protocolRepository: IProtocolReposity) {}

    async execute(protocol_id: number): Promise<void> {
        await this.protocolRepository.deleteProtocol(protocol_id)
    }
}

export {DeleteProtocolService}