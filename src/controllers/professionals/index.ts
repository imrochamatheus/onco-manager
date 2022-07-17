import {
  createProfessionalService,
  getOneProfessionalService,
  listAllProfessionalService,
} from "../../services/professionals";
import { CreateProfessionalController } from "./createProfessional.ctrl";
import { GetProfessionalByIdController } from "./getProfessionalById.ctrl";
import { ListAllProfessionalController } from "./listAllProfessional.ctrl";

const createProfessionalController = new CreateProfessionalController(
  createProfessionalService
);
const listAllProfessionalController = new ListAllProfessionalController(
  listAllProfessionalService
);
const getProfessionalByIdController = new GetProfessionalByIdController(
  getOneProfessionalService
);

export {
  createProfessionalController,
  listAllProfessionalController,
  getProfessionalByIdController,
};
