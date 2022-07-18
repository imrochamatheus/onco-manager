import {
  ISeatCreate,
  ISeat,
  ISeatId,
} from "../../../interfaces/seats.interfaces";

interface ISeatsRepository {
  createSeat({ seat_number }: ISeatCreate): Promise<ISeat>;
  deleteSeat({ seat_id }: ISeatId): Promise<void>;
  listAllSeats(): Promise<ISeat[]>;
}

export { ISeatsRepository };
