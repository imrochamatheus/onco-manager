import { Request, Response } from "express";
import { ListPatientHistoryService } from "../../services/register_seat/listPatientHistory.svc";


export class ListPatientHistoryController{

  constructor(private listPatientHistoryService: ListPatientHistoryService){}

  async handle(req: Request, res: Response): Promise<Response>{

    const patient_id = req.params.patient_id;

    const history = await this.listPatientHistoryService.execute({patient_id});

    return res.status(200).json(history);
  }
}