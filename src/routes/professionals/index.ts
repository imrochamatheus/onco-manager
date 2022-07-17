import {
  createProfessionalController,
  deleteProfessionalController,
  getProfessionalByIdController,
  listAllProfessionalController,
  updateProfessionalController,
} from "../../controllers/professionals";
import {
  professionalSchema,
  professionalPatchSchema,
} from "../../schemas/professionals";
import { Request, Response, Router, NextFunction } from "express";
import schemaValidation from "../../middlewares/schemaValidation.mdw";
import checkIfProfessionalExists from "../../middlewares/checkIfProfessionalExists.mdw";
import authorizarionMiddleware from "../../middlewares/authorization.mdw";

const professionalsRouter = Router();

professionalsRouter.get("/", (req: Request, res: Response) => {
  listAllProfessionalController.handle(req, res);
});

professionalsRouter.get(
  "/:id",
  (req: Request, res: Response, next: NextFunction) => {
    getProfessionalByIdController.handle(req, res, next);
  }
);

professionalsRouter.post(
  "/",
  authorizarionMiddleware("master"),
  schemaValidation(professionalSchema),
  (req: Request, res: Response, next: NextFunction) => {
    createProfessionalController.handle(req, res, next);
  }
);

professionalsRouter.patch(
  "/:id",
  authorizarionMiddleware("master"),
  checkIfProfessionalExists,
  schemaValidation(professionalPatchSchema),
  (req: Request, res: Response, next: NextFunction) => {
    updateProfessionalController.handle(req, res, next);
  }
);

professionalsRouter.delete(
  "/:id",
  checkIfProfessionalExists,
  (req: Request, res: Response, next: NextFunction) => {
    deleteProfessionalController.handle(req, res, next);
  }
);

export { professionalsRouter };
