import { Request, Response, Router } from "express";
import { createSeatController, listAllSeatsController } from "../../controllers/seats";


const seatsRouter = Router()

seatsRouter.post("/", (req: Request, res: Response) => {
  createSeatController.handle(req, res);
});
seatsRouter.get("/", (req: Request, res: Response) => {
  listAllSeatsController.handle(req, res);
})


export { seatsRouter };