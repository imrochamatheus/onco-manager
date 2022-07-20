import { PrismaClient } from "@prisma/client";
import {
  ISeatCreate,
  ISeat,
  ISeatId,
} from "../../../interfaces/seats.interfaces";
import { prisma } from "../../../client";
import { ISeatsRepository } from "./ISeatsRepository";

class SeatsRepository implements ISeatsRepository {
  prisma: PrismaClient;

  constructor() {
    this.prisma = prisma;
  }

  public async createSeat({ seat_number }: ISeatCreate): Promise<ISeat> {
    const seat = await this.prisma.seat.create({
      data: {
        seat_number,
      },
    });
    return seat;
  }

  public async listAllSeats(): Promise<ISeat[]> {
    const seats = await this.prisma.seat.findMany();

    return seats;
  }

  public async deleteSeat({ seat_id }: ISeatId): Promise<void> {
    await this.prisma.seat.delete({
      where: {
        id: seat_id,
      },
    });
  }
}

export { SeatsRepository };
