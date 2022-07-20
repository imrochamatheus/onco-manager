import { PrismaClient } from "@prisma/client";
import { IProfessionalRepository } from "./IProfessionalRepository";
import {
  IProfessionalCreate,
  IProfessionalCredentials,
  IProfessionalDisplay,
} from "../../../interfaces/professionals.interface";
import AppError from "../../../errors/AppError";
import { prisma } from "../../../client";

class ProfessionalRepository implements IProfessionalRepository {
  prisma: PrismaClient;

  constructor() {
    this.prisma = prisma;
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

  async getProfessionalByEmail(
    email: string
  ): Promise<IProfessionalCredentials | null> {
    const professional = await this.prisma.professionals.findUnique({
      where: {
        email,
      },
    });

    if (!professional) {
      throw new AppError("No professional found", 401);
    }
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
