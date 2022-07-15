import { ProfessionalRepository } from "../../repositories/implementations/professionals";
import { CreateProfessionalService } from "./createProfessional.service";
import { ListAllProfessionalService } from "./listAllProfessional.service";

const professionalsRepository = new ProfessionalRepository();

const createProfessionalService = new CreateProfessionalService(
  professionalsRepository
);
const listAllProfessionalService = new ListAllProfessionalService(
  professionalsRepository
);

export { createProfessionalService, listAllProfessionalService };
