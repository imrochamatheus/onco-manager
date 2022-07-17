import {
  createProfessionalService,
  getOneProfessionalService,
  listAllProfessionalService,
  updateProfessionalService,
} from "../../services/professionals";
import { CreateProfessionalController } from "./createProfessional.ctrl";
import { GetProfessionalByIdController } from "./getProfessionalById.ctrl";
import { ListAllProfessionalController } from "./listAllProfessional.ctrl";
import { UpdateProfessionalController } from "./updateProfessional.ctrl";

const createProfessionalController = new CreateProfessionalController(
  createProfessionalService
);
const listAllProfessionalController = new ListAllProfessionalController(
  listAllProfessionalService
);
const getProfessionalByIdController = new GetProfessionalByIdController(
  getOneProfessionalService
);
const updateProfessionalController = new UpdateProfessionalController(
  updateProfessionalService
);

export {
  createProfessionalController,
  listAllProfessionalController,
  getProfessionalByIdController,
  updateProfessionalController,
};
