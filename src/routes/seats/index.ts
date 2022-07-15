import { Request, Response, Router } from "express";
import { createSeatController, deleteSeatController, listAllSeatsController } from "../../controllers/seats";


const seatsRouter = Router();

seatsRouter.post("/", (req: Request, res: Response) => {
  createSeatController.handle(req, res);
});
seatsRouter.get("/", (req: Request, res: Response) => {
  listAllSeatsController.handle(req, res);
});
seatsRouter.delete("/:id", (req: Request, res: Response) => {
  deleteSeatController.handle(req, res);
});


export { seatsRouter };