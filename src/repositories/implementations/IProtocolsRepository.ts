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
<<<<<<< HEAD
  readOneProtocol(protocol_id: number): Promise<IProtocol>;
  updateProtocol(protocol_id: number, data: IProtocolUpdate): Promise<void>;
  deleteProtocol(protocol_id: number): Promise<void>;
=======
  readOneProtocol(id: number): Promise<IProtocol | null>;
  updateProtocol(id: number, data: IProtocolUpdate): Promise<void>;
  deleteProtocol(id: number): Promise<void>;
>>>>>>> main
}

export { IProtocolReposity };
