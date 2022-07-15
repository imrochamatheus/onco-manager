import { ISeatId } from "../../interfaces/seats.interfaces";
import { ISeatsRepository } from "../../repositories/implementations/ISeatsRepository";

class DeleteSeatService {
  constructor(private seatRepository: ISeatsRepository) {}

  async execute({ seat_id }: ISeatId) {
    await this.seatRepository.deleteSeat({
      seat_id,
    });
  }
}

export { DeleteSeatService };
