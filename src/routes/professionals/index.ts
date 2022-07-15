import { Request, Response, Router } from "express";
import { createProfessionalController } from "../../controllers/professionals";
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

export { professionalsRouter };
