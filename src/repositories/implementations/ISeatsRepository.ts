import { ISeatCreate, ISeatCreateResp } from "../../interfaces/seats.interfaces";

interface ISeatsRepository {
  create({ seat_number }: ISeatCreate): Promise<ISeatCreateResp>;
}

export { ISeatsRepository };
