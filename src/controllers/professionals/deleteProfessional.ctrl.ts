import { Request, Response, NextFunction } from "express";
import { DeleteProfessionalService } from "../../services/professionals/deleteProfessional.svc";
export class DeleteProfessionalController {
  constructor(private deleteProfessionalService: DeleteProfessionalService) {}

  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const { id } = req.params;
    try {
      await this.deleteProfessionalService.execute(id);

      return res
        .status(200)
        .json({ message: "Professional deleted successfully" });
    } catch (error) {
      next(error);
    }
  }
}
