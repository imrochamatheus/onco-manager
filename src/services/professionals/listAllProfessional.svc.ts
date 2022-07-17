import { IProfessionalDisplay } from "../../interfaces/professionals.interface";
import { IProfessionalRepository } from "../../repositories/implementations/IProfessionalRepository";

class ListAllProfessionalService {
  constructor(private professionalRepository: IProfessionalRepository) {}

  async execute(): Promise<IProfessionalDisplay[]> {
    const professionals =
      await this.professionalRepository.listAllProfessional();

    return professionals;
  }
}

export { ListAllProfessionalService };
