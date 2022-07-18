import { Request, Response, NextFunction } from "express";
import { UpdateProfessionalService } from "../../services/professionals/updateProfessional.svc";

export class UpdateProfessionalController {
  constructor(private updateProfessionalService: UpdateProfessionalService) {}

  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const { id } = req.params;
    const data = { ...req.body };

    try {
      await this.updateProfessionalService.execute(id, data);

      return res
        .status(200)
        .json({ message: "Professional updated successfully" });
    } catch (error) {
      next(error);
    }
  }
}
