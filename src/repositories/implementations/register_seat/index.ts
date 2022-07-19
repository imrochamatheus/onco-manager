import { PrismaClient } from "@prisma/client";
import {
  IRegisterSeatCreate,
  IRegisterSeat,
  IRegisterSeatDate,
} from "../../../interfaces/registerSeat.interface";
import { IRegisterSeatRepository } from "./IRegisterSeatRepository";

class RegisterSeatRepository implements IRegisterSeatRepository {
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async createRegisterSeat({
    id_patient,
    id_protocol,
    id_seat,
    full_name,
  }: IRegisterSeatCreate): Promise<IRegisterSeat> {
    const registerSeat = await this.prisma.registerSeat.create({
      data: {
        id_patient,
        id_protocol,
        id_seat,
        checkin_timestamp: Date.now().toString(),
        checkin_professional: full_name,
      },
    });

    return registerSeat;
  }

  public async listRelatories({
    filter_date,
  }: IRegisterSeatDate): Promise<IRegisterSeat[]> {
    const splitedDate = filter_date.split("-");

    const refatoredDate = `${splitedDate[1]}/${splitedDate[0]}/${splitedDate[2]}`;

    const newDate = new Date(refatoredDate).getTime();

    const relatories = await this.prisma.registerSeat.findMany({
      where: {
        checkin_professional: `${newDate}`,
      },
    });

    return relatories;
  }
}

export { RegisterSeatRepository };
