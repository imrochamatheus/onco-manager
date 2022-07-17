import { PrismaClient } from "@prisma/client";
import { IProfessionalRepository } from "./IProfessionalRepository";
import {
  IProfessionalCreate,
  IProfessionalDisplay,
} from "../../../interfaces/professionals.interface";

class ProfessionalRepository implements IProfessionalRepository {
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(
    professionalData: IProfessionalCreate
  ): Promise<IProfessionalDisplay> {
    const professional = await this.prisma.professionals.create({
      data: {
        ...professionalData,
      },
      select: {
        id: true,
        email: true,
        full_name: true,
        occupation: true,
        access_level: true,
        cartao_nacional_saude: true,
      },
    });

    return professional;
  }

  async listAllProfessional(): Promise<IProfessionalDisplay[]> {
    const professionals = await this.prisma.professionals.findMany();

    return professionals;
  }

  async getProfessionalById(id: string): Promise<IProfessionalDisplay | null> {
    const professional = await this.prisma.professionals.findUniqueOrThrow({
      where: { id },
    });

    return professional;
  }

  async updateProfessional(
    id: string,
    data: IProfessionalCreate
  ): Promise<void> {
    await this.prisma.professionals.update({
      data,
      where: { id },
    });
  }

  async deleteProfessional(id: string): Promise<void> {
    await this.prisma.professionals.delete({
      where: {
        id,
      },
    });
  }
}

export { ProfessionalRepository };
