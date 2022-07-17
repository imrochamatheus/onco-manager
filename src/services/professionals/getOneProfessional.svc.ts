import { IProfessionalDisplay } from "../../interfaces/professionals.interface";
import { IProfessionalRepository } from "../../repositories/implementations/IProfessionalRepository";

class ListOneProfessionalService {
  constructor(private professionalRepository: IProfessionalRepository) {}

  async execute(id: string): Promise<IProfessionalDisplay | null> {
    const professional = await this.professionalRepository.getProfessionalById(
      id
    );

    return professional;
  }
}

export { ListOneProfessionalService };
