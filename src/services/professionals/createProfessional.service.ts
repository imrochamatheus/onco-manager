import AppError from "../../errors/AppError";
import {
  IProfessionalCreate,
  IProfessionalDisplay,
} from "../../interfaces/professionals.interface";
import { IProfessionalRepository } from "../../repositories/implementations/IProfessionalRepository";

class CreateProfessionalService {
  constructor(private professionalsRepository: IProfessionalRepository) {}

  async execute({
    full_name,
    email,
    password,
    access_level,
    occupation,
  }: IProfessionalCreate): Promise<IProfessionalDisplay | AppError> {
    const createdProfessional = await this.professionalsRepository.create({
      full_name,
      email,
      password,
      access_level,
      occupation,
    });

    return createdProfessional;
  }
}

export { CreateProfessionalService };
