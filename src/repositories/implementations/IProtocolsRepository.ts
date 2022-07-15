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
  readOneProtocol(id: number): Promise<IProtocol | null>;
  updateProtocol(id: number, data: IProtocolUpdate): Promise<void>;
  deleteProtocol(id: number): Promise<void>;
}

export { IProtocolReposity };
