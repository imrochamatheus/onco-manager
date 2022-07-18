import { ISeatId } from "../../interfaces/seats.interfaces";
import { ISeatsRepository } from "../../repositories/implementations/seats/ISeatsRepository";

class DeleteSeatService {
  constructor(private seatRepository: ISeatsRepository) {}

  async execute({ seat_id }: ISeatId) {
    await this.seatRepository.deleteSeat({
      seat_id,
    });
  }
}

export { DeleteSeatService };
