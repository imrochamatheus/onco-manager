import { Request, Response, NextFunction } from "express";
import { ListOneProfessionalService } from "../../services/professionals/getOneProfessional.svc";

export class GetProfessionalByIdController {
  constructor(private getOneProfessionalService: ListOneProfessionalService) {}

  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const { id } = req.params;

    try {
      const professional = await this.getOneProfessionalService.execute(id);

      return res.status(200).json(professional);
    } catch (error) {
      next(error);
    }
  }
}
