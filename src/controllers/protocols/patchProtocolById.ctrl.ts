import { Request, Response, NextFunction } from "express";
import { UpdateProtocolService } from "../../services/protocols/updateProtocol.svc";

export class PatchProtocolByIdController {
  constructor(private updateProtocolService: UpdateProtocolService) {}

  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const { id } = req.params;
    const data = { ...req.body };

    if (data.id) {
      delete data.id;
    }

    try {
      this.updateProtocolService.execute(Number(id), data);

      return res.status(200).json({ message: "protocol updated successfully" });
    } catch (error) {
      next(error);
    }
  }
}
