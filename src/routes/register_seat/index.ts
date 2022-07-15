import { Request, Response, Router } from "express";
import { createRegisterSeatController } from "../../controllers/register_seat";


const registerSeatRouter = Router();

registerSeatRouter.post("/register_seat", (req: Request, res: Response) => {
  createRegisterSeatController.handle(req, res);
});


export { registerSeatRouter };