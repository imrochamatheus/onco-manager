import AppError from "../../errors/AppError";
import { ISeatCreate, ISeat } from "../../interfaces/seats.interfaces";
import { ISeatsRepository } from "../../repositories/implementations/ISeatsRepository";



class CreateSeatService{
  constructor(private seatRepository: ISeatsRepository){}

  async execute({
    seat_number

  }: ISeatCreate): Promise<ISeat> {
    
    const createSeat = await this.seatRepository.createSeat({
      seat_number
    });

    return createSeat;
  }
}


export { CreateSeatService };