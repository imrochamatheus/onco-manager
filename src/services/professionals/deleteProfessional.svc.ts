import { IProfessionalRepository } from "../../repositories/implementations/professionals/IProfessionalRepository";

class DeleteProfessionalService {
  constructor(private professionalRepository: IProfessionalRepository) {}

  async execute(id: string): Promise<void> {
    await this.professionalRepository.deleteProfessional(id);
  }
}

export { DeleteProfessionalService };
