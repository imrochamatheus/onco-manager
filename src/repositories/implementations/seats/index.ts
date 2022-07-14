import { PrismaClient } from "@prisma/client";
import { ISeatCreate, ISeat } from "../../../interfaces/seats.interfaces";
import { ISeatsRepository } from "../ISeatsRepository";


class SeatsRepository implements ISeatsRepository {
  prisma: PrismaClient

  constructor(){
    this.prisma = new PrismaClient()
  }

  public async createSeat({ seat_number }: ISeatCreate): Promise<ISeat> {
    
    const seat = await this.prisma.seat.create({
      data: {
        seat_number
      }
    })

    return seat;
  }

  public async listAllSeats(): Promise<ISeat[]> {

    const seats = await this.prisma.seat.findMany()

    return seats;
  }


}


export { SeatsRepository }