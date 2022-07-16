interface IProtocolCreate {
  name: string;
  volume: number;
  description: string;
  infusion_time: string;
}

interface IProtocol
  extends Omit<
    IProtocolCreate,
    "name" | "volume" | "description" | "infusion_time"
  > {
  id?: String;
}

interface IProtocolUpdate {
  name?: string;
  volume?: number;
  description?: string;
  infusion_time?: string;
}

export { IProtocolCreate, IProtocol, IProtocolUpdate };
