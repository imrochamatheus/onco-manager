import { PrismaClient } from "@prisma/client";
import { IPatientByIdReq } from "../../../interfaces/patient.interface";
import {
  IRegisterSeatCreate,
  IRegisterSeat,
  IRegisterSeatDate,
  IRegisterSeatUpdate,
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
    const relatories = await this.prisma.registerSeat.findMany({
      where: {
        checkin_timestamp: {
          gte: new Date(filter_date).getTime().toString(),
          lte: new Date(`${filter_date}T19:00`).getTime().toString(),
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
    { full_name, notes }: IRegisterSeatUpdate
  ): Promise<IRegisterSeat[] | void> {
    await this.prisma.registerSeat.update({
      where: {
        id,
      },
      data: {
        notes,
        checkout_professional: full_name,
        checkout_timestamp: Date.now().toString(),
      },
    });

    return;
  }
}

export { RegisterSeatRepository };
