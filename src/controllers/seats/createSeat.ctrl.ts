import { Request, Response } from "express";
import { CreateSeatService } from "../../services/seats/createSeat.svc";


export class CreateSeatController {

  constructor(private createSeatService: CreateSeatService){}

  async handle(req: Request, res: Response): Promise<Response>{
  
    const seatData = {...req.body};

    const newSeat = await this.createSeatService.execute(seatData);

    return res.status(201).json({
      message: "Seat Succesfully Created",
      data: newSeat
    });

  };
}