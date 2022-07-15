import { PrismaClient } from "@prisma/client";
import { IRegisterSeatCreate, IRegisterSeat } from "../../../interfaces/registerSeat.interface";
import { IRegisterSeatRepository } from "../IRegisterSeatRepository";


class RegisterSeatRepository implements IRegisterSeatRepository{
  prisma: PrismaClient;

  constructor(){
    this.prisma = new PrismaClient();
  }

  public async createRegisterSeat({ id_patient, id_protocol, id_seat, checkin_timestamp, checkin_professional, checkout_timestamp, checkout_professional, notes }: IRegisterSeatCreate): Promise<IRegisterSeat> {
    
    const registerSeat = await this.prisma.registerSeat.create({
      data: {
        id_patient,
        id_protocol,
        id_seat,
        checkin_timestamp,
        checkin_professional,
        checkout_timestamp,
        checkout_professional,
        notes
      }
    })

    return registerSeat;
  }
}


export { RegisterSeatRepository }