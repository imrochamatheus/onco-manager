import { ISeatCreate, ISeat, ISeatId } from "../../interfaces/seats.interfaces";

interface ISeatsRepository {
  listAllSeats(): Promise<ISeat[]>;
  deleteSeat({ seat_id }: ISeatId): Promise<void>;
  createSeat({ seat_number }: ISeatCreate): Promise<ISeat>;
}

export { ISeatsRepository };
