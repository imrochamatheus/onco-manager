import { Request, Response, NextFunction } from "express";
import { UpdateRegisterSeatService } from "../../services/register_seat/updateRegisterSeat.svc";

export class UpdateRegisterSeatController {
  constructor(private updateRegisterSeatService: UpdateRegisterSeatService) {}

  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const { id_register_seat } = req.params;
    const registerSeatData = { ...req.body };

    try {
      await this.updateRegisterSeatService.execute(
        id_register_seat,
        registerSeatData
      );

      return res.status(201).json({
        message: "Checkout Successfully updated",
      });
    } catch (error) {
      next(error);
    }
  }
}
