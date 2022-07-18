import { IPatientByIdReq } from "../../../interfaces/patient.interface";
import {
  IRegisterSeat,
  IRegisterSeatCreate,
  IRegisterSeatDate,
  IRegisterSeatUpdate,
} from "../../../interfaces/registerSeat.interface";

interface IRegisterSeatRepository {
  createRegisterSeat({
    id_patient,
    id_protocol,
    id_seat,
    checkin_timestamp,
    checkin_professional,
    checkout_timestamp,
    checkout_professional,
    notes,
  }: IRegisterSeatCreate): Promise<IRegisterSeat>;
  listRelatories({ filter_date }: IRegisterSeatDate): Promise<IRegisterSeat[]>;
  listPatientHistory({ patient_id }: IPatientByIdReq): Promise<IRegisterSeat[]>;
  updateCheckout(
    id: string,
    data: IRegisterSeatUpdate
  ): Promise<IRegisterSeat[] | void>;
}

export { IRegisterSeatRepository };
