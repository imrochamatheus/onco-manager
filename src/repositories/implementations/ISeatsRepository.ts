import { ISeatCreate, ISeat } from "../../interfaces/seats.interfaces";

interface ISeatsRepository {

  createSeat({ seat_number }: ISeatCreate): Promise<ISeat>;

  listAllSeats(): Promise<ISeat[]>;
}

export { ISeatsRepository };
