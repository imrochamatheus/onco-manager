import { Request, Response } from "express";
import { CreateProfessionalService } from "../../services/professionals/createProfessional.service";

export class CreateProfessionalController {
  constructor(private createProfessionalService: CreateProfessionalService) {}

  async handle(req: Request, res: Response): Promise<Response | void> {
    const professionalData = { ...req.body };
    const newProfessional = await this.createProfessionalService.execute(
      professionalData
    );

    return res.status(201).json(newProfessional)
  }
}
