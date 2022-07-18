import { Request, Response, NextFunction } from "express";
import { CreateProfessionalService } from "../../services/professionals/createProfessional.svc";

export class CreateProfessionalController {
  constructor(private createProfessionalService: CreateProfessionalService) {}

  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const professionalData = { ...req.body };
    try {
      const newProfessional = await this.createProfessionalService.execute(
        professionalData
      );

      return res.status(201).json(newProfessional);
    } catch (error) {
      next(error);
    }
  }
}
