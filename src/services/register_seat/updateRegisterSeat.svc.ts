import { IRegisterSeat } from "../../interfaces/registerSeat.interface";
import { IRegisterSeatUpdate } from "../../interfaces/registerSeat.interface";
import { IRegisterSeatRepository } from "../../repositories/implementations/register_seat/IRegisterSeatRepository";

class UpdateRegisterSeatService {
  constructor(private registerSeatRepository: IRegisterSeatRepository) {}

  async execute(
    id: string,
    data: IRegisterSeatUpdate
  ): Promise<IRegisterSeat | void> {
    await this.registerSeatRepository.updateCheckout(id, data);

    return;
  }
}

export { UpdateRegisterSeatService };
