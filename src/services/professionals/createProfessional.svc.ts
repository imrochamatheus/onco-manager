import AppError from "../../errors/AppError";
import { hashSync } from "bcrypt";
import {
  IProfessionalCreate,
  IProfessionalDisplay,
} from "../../interfaces/professionals.interface";
import { IProfessionalRepository } from "../../repositories/implementations/professionals/IProfessionalRepository";

class CreateProfessionalService {
  constructor(private professionalsRepository: IProfessionalRepository) {}

  async execute({
    password,
    ...professionalData
  }: IProfessionalCreate): Promise<IProfessionalDisplay | AppError> {
    password = hashSync(password, 10);

    const createdProfessional = await this.professionalsRepository.create({
      password,
      ...professionalData,
    });

    return createdProfessional;
  }
}

export { CreateProfessionalService };
