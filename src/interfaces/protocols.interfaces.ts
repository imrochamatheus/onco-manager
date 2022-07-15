interface IProtocolCreate {
  name: string;
  volume: number;
  description: string;
  infusion_time: string;
}

interface IProtocol extends IProtocolCreate {
  id?: number;
}
