import { Request, Response, NextFunction } from "express";
import { ListRelatoriesService } from "../../services/register_seat/listRelatories.svc";

export class ListRelatoriesController {
  constructor(private listRelatoriesService: ListRelatoriesService) {}

  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const filter_date = req.params.date;

    try {
      const relatories = await this.listRelatoriesService.execute({
        filter_date,
      });

      return res.status(200).json(relatories);
    } catch (error) {
      next(error);
    }
  }
}
