interface IRegisterSeatCreate {
  id_seat: number;
  id_patient: string;
  id_protocol: number;
  notes: string | null;
  checkin_timestamp: string;
  checkin_professional: string;
  checkout_timestamp: string | null;
  checkout_professional: string | null;
}

interface IRegisterSeat extends IRegisterSeatCreate {
  id: string;
}

interface IRegisterSeatDate {
  filter_date: string;
}

export { IRegisterSeatCreate, IRegisterSeat, IRegisterSeatDate };
