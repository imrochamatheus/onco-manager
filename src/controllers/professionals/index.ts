import { createProfessionalService } from "../../services/professionals";
import { CreateProfessionalController } from "./createProfessional.controller";

const createProfessionalController = new CreateProfessionalController(
  createProfessionalService
);

export { createProfessionalController };
