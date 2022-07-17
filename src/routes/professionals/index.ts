import {
  createProfessionalController,
  listAllProfessionalController,
} from "../../controllers/professionals";
import { Request, Response, Router } from "express";
import schemaValidation from "../../middlewares/schemaValidation.mdw";
import professionalSchema from "../../schemas/professionals";

const professionalsRouter = Router();

professionalsRouter.post(
  "/",
  schemaValidation(professionalSchema),
  (req: Request, res: Response) => {
    createProfessionalController.handle(req, res);
  }
);

professionalsRouter.get("/", (req: Request, res: Response) => {
  listAllProfessionalController.handle(req, res);
});

export { professionalsRouter };
