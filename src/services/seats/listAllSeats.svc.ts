import { ISeat } from "../../interfaces/seats.interfaces";
import { ISeatsRepository } from "../../repositories/implementations/seats/ISeatsRepository";

class ListAllSeatsService {
  constructor(private seatRepository: ISeatsRepository) {}

  async execute(): Promise<ISeat[]> {
    const seats = await this.seatRepository.listAllSeats();

    return seats;
  }
}

export { ListAllSeatsService };
