import { IRegisterSeat, IRegisterSeatCreate, IRegisterSeatDate } from "../../interfaces/registerSeat.interface"


interface IRegisterSeatRepository {

  createRegisterSeat({id_patient, id_protocol, id_seat, checkin_timestamp, checkin_professional, checkout_timestamp, checkout_professional, notes}: IRegisterSeatCreate): Promise<IRegisterSeat>

  listRelatories({filter_date}: IRegisterSeatDate): Promise<IRegisterSeat[]>;
}


export { IRegisterSeatRepository }