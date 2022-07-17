import { createSessionService } from "../../services/sessions";

import { CreateSessionController } from "./createSession.ctrl";

const createSessionController = new CreateSessionController(createSessionService)

export {createSessionController}