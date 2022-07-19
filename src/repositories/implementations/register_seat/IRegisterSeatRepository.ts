import {
  IRegisterSeat,
  IRegisterSeatCreate,
  IRegisterSeatDate,
} from "../../../interfaces/registerSeat.interface";

interface IRegisterSeatRepository {
  createRegisterSeat({
    id_patient,
    id_protocol,
    id_seat,
    full_name,
  }: IRegisterSeatCreate): Promise<IRegisterSeat>;

  listRelatories({ filter_date }: IRegisterSeatDate): Promise<IRegisterSeat[]>;
}

export { IRegisterSeatRepository };
