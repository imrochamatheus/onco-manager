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

  public async create(
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
      },
    });

    return professional;
  }

  public async listAllProfessional(): Promise<IProfessionalDisplay[]> {
    const professionals = await this.prisma.professionals.findMany();

    return professionals;
  }

  getProfessionalById(id: string): Promise<IProfessionalDisplay | null> {
    const professional = this.prisma.professionals.findUniqueOrThrow({
      where: { id },
    });

    return professional;
  }
}

export { ProfessionalRepository };
