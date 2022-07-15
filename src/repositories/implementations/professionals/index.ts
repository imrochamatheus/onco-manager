import { PrismaClient } from "@prisma/client";
import { IProfessionalRepository } from "../IProfessionalRepository";
import {
  IProfessionalCreate,
  IProfessionalDisplay,
} from "../../../interfaces/professionals.interface";

class ProfessionalRepository implements IProfessionalRepository {
  prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }
  public async create({
    full_name,
    email,
    password,
    access_level,
    occupation,
  }: IProfessionalCreate): Promise<IProfessionalDisplay> {
    const professional = await this.prisma.professionals.create({
      data: {
        full_name,
        email,
        password,
        access_level,
        occupation,
      },
      select: {
        full_name: true,
        email: true,
        access_level: true,
        occupation: true,
      },
    });

    return professional;
  }

  public async listAllProfessional(): Promise<IProfessionalDisplay[]> {
    const professionals = await this.prisma.professionals.findMany();

    return professionals;
  }
}

export { ProfessionalRepository };
