import { Request, Response, NextFunction } from "express";
import { DeleteProtocolService } from "../../services/protocols/deleteProtocol.svc";

export class DeleteProtocolController {
  constructor(private deleteProtocolService: DeleteProtocolService) {}

  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const { id } = req.params;

    try {
      this.deleteProtocolService.execute(Number(id));

      res.status(200).json({ message: "Protocol deleted successfully" });
    } catch (error) {
      next(error);
    }
  }
}
