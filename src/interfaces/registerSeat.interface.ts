interface IRegisterSeatCreate{
  id_patient: string
  id_protocol: bigint
  id_seat: number

  checkin_timestamp: string
  checkin_professional: string

  checkout_timestamp: string
  checkout_professional: string

  notes: string
};

interface IRegisterSeat extends IRegisterSeatCreate{
  id: string
};


export { IRegisterSeatCreate, IRegisterSeat};