import {
  IProtocol,
  IProtocolCreate,
  IProtocolUpdate,
} from "../../interfaces/protocols.interfaces";

interface IProtocolReposity {
  createProtocol({
    name,
    description,
    volume,
    infusion_time,
  }: IProtocolCreate): Promise<IProtocol>;
  listAllProtocols(): Promise<IProtocol[]>;
  readOneProtocol(protocol_id: string): Promise<IProtocol>;
  updateProtocol(protocol_id: string, data: IProtocolUpdate): Promise<void>;
  deleteProtocol(protocol_id: string): Promise<void>;
}

export { IProtocolReposity }
