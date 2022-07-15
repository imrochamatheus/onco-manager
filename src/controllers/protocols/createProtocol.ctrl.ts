import { Request, Response } from "express";
import { CreateProtocolService } from "../../services/protocols/createProtocol.svc";

export class CreateProtocolController {
  constructor(private createProtocolService: CreateProtocolService) {}

  async handle(req: Request, res: Response) {
    const protocolData = { ...req.body };

    const newProtocol = await this.createProtocolService.execute(protocolData);

    return res.status(201).json({
      message: "Protocol Succesfully Created",
      data: newProtocol,
    });
  }
}
