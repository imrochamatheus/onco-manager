import {
  IProfessionalCreate,
  IProfessionalDisplay,
} from "../../interfaces/professionals.interface";
import { IProfessionalRepository } from "../../repositories/implementations/professionals/IProfessionalRepository";

class UpdateProfessionalService {
  constructor(private professionalRepository: IProfessionalRepository) {}

  async execute(id: string, data: IProfessionalCreate): Promise<void> {
    await this.professionalRepository.updateProfessional(id, data);
  }
}

export { UpdateProfessionalService };
