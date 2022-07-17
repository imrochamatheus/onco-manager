import {
  IRegisterSeat,
  IRegisterSeatCreate,
} from "../../interfaces/registerSeat.interface";
import { IRegisterSeatRepository } from "../../repositories/implementations/register_seat/IRegisterSeatRepository";

class CreateRegisterSeatService {
  constructor(private registerSeatRepository: IRegisterSeatRepository) {}

  async execute({
    id_patient,
    id_protocol,
    id_seat,
    checkin_timestamp,
    checkin_professional,
    checkout_timestamp,
    checkout_professional,
    notes,
  }: IRegisterSeatCreate): Promise<IRegisterSeat> {
    const createRegisterSeat =
      await this.registerSeatRepository.createRegisterSeat({
        id_patient,
        id_protocol,
        id_seat,
        checkin_timestamp,
        checkin_professional,
        checkout_timestamp,
        checkout_professional,
        notes,
      });

    return createRegisterSeat;
  }
}

export { CreateRegisterSeatService };
