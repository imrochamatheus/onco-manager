import { PrismaClient } from "@prisma/client";
import { ISeatCreate, ISeat, ISeatId } from "../../../interfaces/seats.interfaces";
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

  public async deleteSeat({ seat_id }: ISeatId): Promise<Boolean> {
    
    await this.prisma.seat.delete({
      where: {
        id: seat_id,
      },
    })

    return true
  }
  
}


export { SeatsRepository }