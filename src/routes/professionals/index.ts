import {
  createProfessionalController,
  getProfessionalByIdController,
  listAllProfessionalController,
} from "../../controllers/professionals";
import professionalSchema from "../../schemas/professionals";
import { Request, Response, Router, NextFunction } from "express";
import schemaValidation from "../../middlewares/schemaValidation.mdw";

const professionalsRouter = Router();

professionalsRouter.post(
  "/",
  schemaValidation(professionalSchema),
  (req: Request, res: Response, next: NextFunction) => {
    createProfessionalController.handle(req, res, next);
  }
);

professionalsRouter.get("/", (req: Request, res: Response) => {
  listAllProfessionalController.handle(req, res);
});

professionalsRouter.get(
  "/:id",
  (req: Request, res: Response, next: NextFunction) => {
    getProfessionalByIdController.handle(req, res, next);
  }
);

export { professionalsRouter };
