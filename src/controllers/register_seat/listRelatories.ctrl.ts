import { Request, Response } from "express";
import { ListRelatoriesService } from "../../services/register_seat/listRelatories.svc";

export class ListRelatoriesController {
  constructor(private listRelatoriesService: ListRelatoriesService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const filter_date = req.params.date;

    const relatories = await this.listRelatoriesService.execute({
      filter_date,
    });

    return res.status(200).json(relatories);
  }
}
