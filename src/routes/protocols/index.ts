import { Request, Response, Router, NextFunction } from "express";
import {
  createProtocolController,
  deleteProtocolController,
  getProtocolById,
  listProtocolsController,
  patchProtocolByIdController,
} from "../../controllers/protocols";
import authorizarionMiddleware from "../../middlewares/authorization.mdw";
import checkIfProtocolExists from "../../middlewares/checkIfProtocolExists.mdw";
import schemaValidation from "../../middlewares/schemaValidation.mdw";
import { protocolSchema, protocolPatchSchema } from "../../schemas/protocol";

const protocolsRouter = Router();

protocolsRouter.get(
  "/",
  authorizarionMiddleware(["master", "staff", "operator"]),
  (req: Request, res: Response) => {
    listProtocolsController.handle(req, res);
  }
);

protocolsRouter.get(
  "/:id",
  authorizarionMiddleware(["master", "staff", "operator"]),
  checkIfProtocolExists,
  (req: Request, res: Response, next: NextFunction) => {
    getProtocolById.handle(req, res, next);
  }
);

protocolsRouter.patch(
  "/:id",
  authorizarionMiddleware(["master", "staff"]),
  checkIfProtocolExists,
  schemaValidation(protocolPatchSchema),
  (req: Request, res: Response, next: NextFunction) => {
    patchProtocolByIdController.handle(req, res, next);
  }
);

protocolsRouter.delete(
  "/:id",
  authorizarionMiddleware(["master", "staff"]),
  checkIfProtocolExists,
  (req: Request, res: Response, next: NextFunction) => {
    deleteProtocolController.handle(req, res, next);
  }
);

protocolsRouter.post(
  "/",
  authorizarionMiddleware(["master", "staff"]),
  schemaValidation(protocolSchema),
  (req: Request, res: Response, next: NextFunction) => {
    createProtocolController.handle(req, res, next);
  }
);

export { protocolsRouter };
