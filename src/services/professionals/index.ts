import { ProfessionalRepository } from "../../repositories/implementations/professionals";
import { CreateProfessionalService } from "./createProfessional.svc";
import { ListOneProfessionalService } from "./getOneProfessional.svc";
import { ListAllProfessionalService } from "./listAllProfessional.svc";
import { UpdateProfessionalService } from "./updateProfessional.svc";

const professionalsRepository = new ProfessionalRepository();

const createProfessionalService = new CreateProfessionalService(
  professionalsRepository
);
const listAllProfessionalService = new ListAllProfessionalService(
  professionalsRepository
);
const getOneProfessionalService = new ListOneProfessionalService(
  professionalsRepository
);
const updateProfessionalService = new UpdateProfessionalService(
  professionalsRepository
);

export {
  createProfessionalService,
  listAllProfessionalService,
  getOneProfessionalService,
  updateProfessionalService,
};
