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
    full_name,
  }: IRegisterSeatCreate): Promise<IRegisterSeat>;

  listRelatories({ filter_date }: IRegisterSeatDate): Promise<IRegisterSeat[]>;
  listPatientHistory(patient_id: IPatientByIdReq): Promise<IRegisterSeat[]>;
  updateCheckout(
    id: string,
    data: IRegisterSeatUpdate
  ): Promise<IRegisterSeat[] | void>;
}

export { IRegisterSeatRepository };
