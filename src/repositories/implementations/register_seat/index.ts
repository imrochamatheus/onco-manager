import { PrismaClient } from "@prisma/client";
import { IPatientByIdReq } from "../../../interfaces/patient.interface";
import { IRegisterSeatRepository } from "./IRegisterSeatRepository";
import {
  IRegisterSeatCreate,
  IRegisterSeatDate,
  IRegisterSeat,
  IRegisterSeatUpdate,
} from "../../../interfaces/registerSeat.interface";

class RegisterSeatRepository implements IRegisterSeatRepository {
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async createRegisterSeat({
    id_patient,
    id_protocol,
    id_seat,
    checkin_timestamp,
    checkin_professional,
    checkout_timestamp,
    checkout_professional,
    notes,
  }: IRegisterSeatCreate): Promise<IRegisterSeat> {
    const registerSeat = await this.prisma.registerSeat.create({
      data: {
        notes,
        id_seat,
        id_patient,
        id_protocol,
        checkin_timestamp,
        checkin_professional,
        checkout_timestamp,
        checkout_professional,
      },
    });

    return registerSeat;
  }

  public async listRelatories({
    filter_date,
  }: IRegisterSeatDate): Promise<IRegisterSeat[]> {
    const relatories = await this.prisma.registerSeat.findMany({
      where: {
        checkin_timestamp: {
          gte: new Date(filter_date).getTime().toString(),
        },
        AND: {
          checkin_timestamp: {
            lte: new Date(`${filter_date}T19:00`).getTime().toString(),
          },
        },
      },
    });

    return relatories;
  }

  public async listPatientHistory({
    patient_id,
  }: IPatientByIdReq): Promise<IRegisterSeat[]> {
    const history = await this.prisma.registerSeat.findMany({
      where: {
        id_patient: patient_id,
      },
    });

    return history;
  }

  async updateCheckout(
    id: string,
    { full_name, ...data }: IRegisterSeatUpdate
  ): Promise<IRegisterSeat[] | void> {
    await this.prisma.registerSeat.update({
      data: {
        ...data,
        checkout_professional: full_name,
        checkout_timestamp: Date.now().toString(),
      },
      where: {
        id,
      },
    });

    return;
  }
}

export { RegisterSeatRepository };
