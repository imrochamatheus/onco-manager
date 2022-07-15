import {
  createProfessionalService,
  listAllProfessionalService,
} from "../../services/professionals";
import { CreateProfessionalController } from "./createProfessional.controller";
import { ListAllProfessionalController } from "./listAllProfessional.controller";

const createProfessionalController = new CreateProfessionalController(
  createProfessionalService
);
const listAllProfessionalController = new ListAllProfessionalController(
  listAllProfessionalService
);

export { createProfessionalController, listAllProfessionalController };
