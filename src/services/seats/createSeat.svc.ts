import AppError from "../../errors/AppError";
import { ISeatCreate, ISeatCreateResp } from "../../interfaces/seats.interfaces";
import { ISeatsRepository } from "../../repositories/implementations/ISeatsRepository";



class CreateSeatService{
  constructor(private seatRepository: ISeatsRepository){}

  async execute({
    seat_number

  }: ISeatCreate): Promise<ISeatCreateResp> {
    
    const createSeat = await this.seatRepository.create({
      seat_number
    });

    return createSeat;
  }
}


export { CreateSeatService };