import { ISeatId } from "../../interfaces/seats.interfaces";
import { ISeatsRepository } from "../../repositories/implementations/ISeatsRepository";

class DeleteSeatService {
  constructor(private seatRepository: ISeatsRepository) {}

<<<<<<< feat-crud-seat
class DeleteSeatService{
  constructor(private seatRepository: ISeatsRepository){}

  async execute({
    seat_id
  }: ISeatId) {

=======
  async execute({ seat_id }: ISeatId): Promise<Boolean> {
>>>>>>> development
    await this.seatRepository.deleteSeat({
      seat_id,
    });

<<<<<<< feat-crud-seat
=======
    return true;
>>>>>>> development
  }
}

export { DeleteSeatService };
