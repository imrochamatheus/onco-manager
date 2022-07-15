import { ISeatCreate, ISeat, ISeatId } from "../../interfaces/seats.interfaces";

interface ISeatsRepository {

  createSeat({ seat_number }: ISeatCreate): Promise<ISeat>;

  listAllSeats(): Promise<ISeat[]>;

  deleteSeat({ seat_id }: ISeatId): Promise<Boolean>;
}

export { ISeatsRepository };
