import AppError from "../../errors/AppError";
import {
  IRegisterSeat,
  IRegisterSeatDate,
} from "../../interfaces/registerSeat.interface";
import { IRegisterSeatRepository } from "../../repositories/implementations/register_seat/IRegisterSeatRepository";

class ListRelatoriesService {
  constructor(private registerSeatsRepository: IRegisterSeatRepository) {}

  async execute({
    filter_date,
  }: IRegisterSeatDate): Promise<IRegisterSeat[] | void> {
    if (!filter_date.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/))
      throw new AppError("Invalid date format", 400);

    const relatories = await this.registerSeatsRepository.listRelatories({
      filter_date,
    });

    return relatories;
  }
}

export { ListRelatoriesService };
