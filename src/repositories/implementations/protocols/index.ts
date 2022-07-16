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

  async createProtocol({
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

<<<<<<< HEAD
  public async readOneProtocol(protocol_id: number): Promise<IProtocol> {
=======
  public async readOneProtocol(id: number): Promise<IProtocol | null> {
>>>>>>> main
    const protocol = await this.prisma.protocol.findUnique({
      where: {
        id,
      },
    });

    return protocol;
  }

  public async updateProtocol(
<<<<<<< HEAD
    protocol_id: number,
=======
    id: number,
>>>>>>> main
    data: IProtocolUpdate
  ): Promise<void> {
    await this.prisma.protocol.update({
      data: data,
      where: {
        id,
      },
    });
  }

<<<<<<< HEAD
  public async deleteProtocol(protocol_id: number): Promise<void> {
=======
  public async deleteProtocol(id: number): Promise<void> {
>>>>>>> main
    await this.prisma.protocol.delete({
      where: {
        id,
      },
    });
  }
}

export { ProtocolsRepository };
