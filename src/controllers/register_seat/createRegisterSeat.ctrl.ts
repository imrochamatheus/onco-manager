import { Request, Response, NextFunction } from "express";
import { CreateRegisterSeatService } from "../../services/register_seat/createRegisterSeat.svc";

export class CreateRegisterSeatController {
  constructor(private createRegisterSeatService: CreateRegisterSeatService) {}

  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const registerSeatData = { ...req.body };
    const { full_name } = req;

    registerSeatData.full_name = full_name;

    try {
      const newRegisterSeat = await this.createRegisterSeatService.execute(
        registerSeatData
      );

      return res.status(201).json({
        message: "Register Seat Successfully Created",
        data: newRegisterSeat,
      });
    } catch (error) {
      next(error);
    }
  }
}
