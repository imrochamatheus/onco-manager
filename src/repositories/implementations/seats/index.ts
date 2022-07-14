import { PrismaClient } from "@prisma/client";
import { ISeatCreate, ISeatCreateResp } from "../../../interfaces/seats.interfaces";
import { ISeatsRepository } from "../ISeatsRepository";



class SeatsRepository implements ISeatsRepository {

  public async create({ seat_number }: ISeatCreate): Promise<ISeatCreateResp> {
    
    const prisma = new PrismaClient();

    const seat = await prisma.seat.create({
      data: {
        seat_number
      }
    })

    return seat;
  }


}


export { SeatsRepository }