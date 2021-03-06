import { prisma } from "../../../client";
import { PrismaClient } from "@prisma/client";
import AppError from "../../../errors/AppError";
import {
  IProtocolCreate,
  IProtocol,
  IProtocolUpdate,
} from "../../../interfaces/protocols.interfaces";
import { IProtocolReposity } from "./IProtocolsRepository";

class ProtocolsRepository implements IProtocolReposity {
  prisma: PrismaClient;

  constructor() {
    this.prisma = prisma;
  }

  async createProtocol({
    name,
    description,
    volume,
    infusion_time,
  }: IProtocolCreate): Promise<IProtocol> {
    const protocolAlreadyExists = await this.prisma.protocol.findUnique({
      where: { name },
    });

    if (protocolAlreadyExists)
      throw new AppError("Protocol already exists", 400);

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

  public async readOneProtocol(id: number): Promise<IProtocol | null> {
    const protocol = await this.prisma.protocol.findUnique({
      where: {
        id,
      },
    });

    return protocol;
  }

  public async updateProtocol(
    id: number,
    data: IProtocolUpdate
  ): Promise<void> {
    await this.prisma.protocol.update({
      data: data,
      where: {
        id,
      },
    });
  }

  public async deleteProtocol(id: number): Promise<void> {
    await this.prisma.protocol.delete({
      where: {
        id,
      },
    });
  }
}

export { ProtocolsRepository };
