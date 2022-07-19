interface IRegisterSeatCreate {
  id_patient: string;
  id_protocol: number;
  id_seat: number;
  full_name: string;

  // checkin_timestamp: string;
  // checkin_professional: string;

  // checkout_timestamp: string;
  // checkout_professional: string;

  // notes: string;
}

interface IRegisterSeatResponse {
  id_patient: string;
  id_protocol: number;
  id_seat: number;

  checkin_timestamp: string;
  checkin_professional: string;
}

interface IRegisterSeat extends Omit<IRegisterSeatResponse, "full_name"> {
  id: string;
}

interface IRegisterSeatDate {
  filter_date: string;
}

export { IRegisterSeatCreate, IRegisterSeat, IRegisterSeatDate };
