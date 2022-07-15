import { Request, Response } from "express";
import { DeleteSeatService } from "../../services/seats/deleteSeat.svc";


class DeleteSeatController{

  constructor(private deleteSeatService: DeleteSeatService){}

  async handle(req: Request, res: Response): Promise<Response>{

    const seat_id = parseInt(req.params.id);

    await this.deleteSeatService.execute({seat_id})

    return res.status(200).json({
      message: "Seat Successfully Deleted"
    })
  }
}


export { DeleteSeatController }