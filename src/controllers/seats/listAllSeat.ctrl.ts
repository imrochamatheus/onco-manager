import { Request, Response } from "express";
import { ListAllSeatsService } from "../../services/seats/listAllSeats.svc";

export class ListAllSeatsController {
  constructor(private listAllSeatsService: ListAllSeatsService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const seats = await this.listAllSeatsService.execute();

    return res.status(200).json(seats);
  }
}
