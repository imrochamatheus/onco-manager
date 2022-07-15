import { ProfessionalRepository } from "../../repositories/implementations/professionals";
import { CreateProfessionalService } from "./createProfessional.service";

const professionalsRepository = new ProfessionalRepository();

const createProfessionalService = new CreateProfessionalService(
  professionalsRepository
);

export { createProfessionalService };
