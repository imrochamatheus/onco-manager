import { Request, Response } from "express";
import { CreateRegisterSeatService } from "../../services/register_seat/createRegisterSeat.svc";



class CreateRegisterSeatController{

  constructor(private createRegisterSeatService: CreateRegisterSeatService){}

  async handle(req: Request, res: Response): Promise<Response>{

    const registerSeatData = {...req.body};

    const newRegisterSeat = await this.createRegisterSeatService.execute(registerSeatData);

    return res.status(201).json({
      message: "Register Seat Successfully Created",
      data: newRegisterSeat
    });
    
  };
};


export { CreateRegisterSeatController };