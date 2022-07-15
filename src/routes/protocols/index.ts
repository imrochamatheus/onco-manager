import { Request, Response, Router } from "express";
import {
  createProtocolController,
  listProtocolsController,
} from "../../controllers/protocols";

const protocolsRouter = Router();

protocolsRouter.post("/", (req: Request, res: Response) => {
  createProtocolController.handle(req, res);
});
protocolsRouter.get("/", (req: Request, res: Response) => {
  listProtocolsController.handle(req, res);
});

export { protocolsRouter };
