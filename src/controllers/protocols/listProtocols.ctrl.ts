import { Request, Response } from "express";
import { ListAllProtocolsService } from "../../services/protocols/listProtocols.svc";

export class ListProtocolsController {
    constructor(private listAllProtocolsService: ListAllProtocolsService) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const protocols = await this.listAllProtocolsService.execute()

        return res.status(200).json(protocols)
    }
}