import { Request, Response } from "express";
import { ListAllProfessionalService } from "../../services/professionals/listAllProfessional.service";

export class ListAllProfessionalController {
  constructor(private listAllProfessionalService: ListAllProfessionalService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const professionals = await this.listAllProfessionalService.execute();

    return res.status(200).json(professionals);
  }
}
