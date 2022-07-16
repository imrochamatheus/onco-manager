import { Request, Response, Router, NextFunction } from "express";
import {
  createProtocolController,
  deleteProtocolController,
  getProtocolById,
  listProtocolsController,
  patchProtocolByIdController,
} from "../../controllers/protocols";
import checkIfProtocolExists from "../../middlewares/checkIfProtocolExists.mdw";
import schemaValidation from "../../middlewares/schemaValidation.mdw";
import { protocolSchema, protocolPatchSchema } from "../../schemas/protocol";

const protocolsRouter = Router();

protocolsRouter.get("/", (req: Request, res: Response) => {
  listProtocolsController.handle(req, res);
});

protocolsRouter.get(
  "/:id",
  checkIfProtocolExists,
  (req: Request, res: Response, next: NextFunction) => {
    getProtocolById.handle(req, res, next);
  }
);

protocolsRouter.patch(
  "/:id",
  checkIfProtocolExists,
  schemaValidation(protocolPatchSchema),
  (req: Request, res: Response, next: NextFunction) => {
    patchProtocolByIdController.handle(req, res, next);
  }
);

protocolsRouter.delete(
  "/:id",
  checkIfProtocolExists,
  (req: Request, res: Response, next: NextFunction) => {
    deleteProtocolController.handle(req, res, next);
  }
);

protocolsRouter.post(
  "/",
  schemaValidation(protocolSchema),
  (req: Request, res: Response, next: NextFunction) => {
    createProtocolController.handle(req, res, next);
  }
);

export { protocolsRouter };
