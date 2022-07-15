import { ISeatCreate, ISeat, ISeatId } from "../../interfaces/seats.interfaces";

interface ISeatsRepository {
  createSeat({ seat_number }: ISeatCreate): Promise<ISeat>;
<<<<<<< feat-crud-seat

  listAllSeats(): Promise<ISeat[]>;

  deleteSeat({ seat_id }: ISeatId): Promise<void>;
=======
  deleteSeat({ seat_id }: ISeatId): Promise<Boolean>;
  listAllSeats(): Promise<ISeat[]>;
>>>>>>> development
}

export { ISeatsRepository };
