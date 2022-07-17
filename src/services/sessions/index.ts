//import {ProfessionalsRepository} from "../../repositories/implementations/professionals" 

import { CreateSessionService } from "./createSession.svc";

// const professionalsRepository = new ProfessionalsRepository()

const createSessionService = new CreateSessionService(""/*professionalsRepository*/)

export {createSessionService}