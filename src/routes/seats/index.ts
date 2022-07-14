import { Request, Response, Router } from "express";
import { createSeatController } from "../../controllers/seats";


const seatsRouter = Router()

seatsRouter.post("/", (req: Request, res: Response) => {
  createSeatController.handle(req, res);
});


export { seatsRouter };