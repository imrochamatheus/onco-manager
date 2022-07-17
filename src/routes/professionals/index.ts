import {
  createProfessionalController,
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
  schemaValidation(professionalSchema),
  (req: Request, res: Response, next: NextFunction) => {
    createProfessionalController.handle(req, res, next);
  }
);

professionalsRouter.patch(
  "/:id",
  checkIfProfessionalExists,
  schemaValidation(professionalPatchSchema),
  (req: Request, res: Response, next: NextFunction) => {
    updateProfessionalController.handle(req, res, next);
  }
);

export { professionalsRouter };
