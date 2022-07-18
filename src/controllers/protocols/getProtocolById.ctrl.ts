import { Request, Response, NextFunction } from "express";
import { IController } from "../../interfaces/controllers.interfaces";
import { ReadProtocolService } from "../../services/protocols/readProtocol.svc";

export class GetProtocolById implements IController {
  constructor(private listOneProtocolService: ReadProtocolService) {}

  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const id = Number(req.params.id);

    try {
      const protocol = await this.listOneProtocolService.execute(id);

      return res.status(200).json(protocol);
    } catch (error) {
      next(error);
    }
  }
}
