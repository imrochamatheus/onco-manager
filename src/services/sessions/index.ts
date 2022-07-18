import { ProfessionalRepository } from "../../repositories/implementations/professionals";
import { CreateSessionService } from "./createSession.svc";

const professionalsRepository = new ProfessionalRepository();
const createSessionService = new CreateSessionService(professionalsRepository);

export { createSessionService };
