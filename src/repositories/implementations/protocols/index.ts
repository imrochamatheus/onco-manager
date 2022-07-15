import { PrismaClient } from "@prisma/client";
import {
  IProtocolCreate,
  IProtocol,
  IProtocolUpdate,
} from "../../../interfaces/protocols.interfaces";
import { IProtocolReposity } from "../IProtocolsRepository";

class ProtocolsRepository implements IProtocolReposity {
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async createProtocol({
    name,
    description,
    volume,
    infusion_time,
  }: IProtocolCreate): Promise<IProtocol> {
    const protocol = await this.prisma.protocol.create({
      data: {
        name,
        description,
        volume,
        infusion_time,
      },
    });

    return protocol;
  }

  public async listAllProtocols(): Promise<IProtocol[]> {
    const protocols = await this.prisma.protocol.findMany();

    return protocols;
  }

  public async readOneProtocol(protocol_id: string): Promise<IProtocol> {
    const protocol = await this.prisma.protocol.findUnique({
      where: protocol_id,
    });

    return protocol;
  }

  public async updateProtocol(
    protocol_id: string,
    data: IProtocolUpdate
  ): Promise<void> {
    
    await this.prisma.protocol.update({
        data: data,
        where: protocol_id
    })

  }

  public async deleteProtocol(protocol_id: string): Promise<void> {
    await this.prisma.protocol.delete({
        where: {
            id: protocol_id
        }
    })
  }
}

export { ProtocolsRepository };
