import { CreateProfessionalService } from "./createProfessional.svc";
import { DeleteProfessionalService } from "./deleteProfessional.svc";
import { UpdateProfessionalService } from "./updateProfessional.svc";
import { ListOneProfessionalService } from "./getOneProfessional.svc";
import { ListAllProfessionalService } from "./listAllProfessional.svc";
import { ProfessionalRepository } from "../../repositories/implementations/professionals";

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
const deleteProfessionalService = new DeleteProfessionalService(
  professionalsRepository
);

export {
  createProfessionalService,
  listAllProfessionalService,
  getOneProfessionalService,
  updateProfessionalService,
  deleteProfessionalService,
};
