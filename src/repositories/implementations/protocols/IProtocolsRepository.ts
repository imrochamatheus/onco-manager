import {
  IProtocol,
  IProtocolCreate,
  IProtocolUpdate,
} from "../../../interfaces/protocols.interfaces";

interface IProtocolReposity {
  createProtocol({
    name,
    description,
    volume,
    infusion_time,
  }: IProtocolCreate): Promise<IProtocol>;
  listAllProtocols(): Promise<IProtocol[]>;
  deleteProtocol(id: number): Promise<void>;
  readOneProtocol(id: number): Promise<IProtocol | null>;
  updateProtocol(id: number, data: IProtocolUpdate): Promise<void>;
}

export { IProtocolReposity };
