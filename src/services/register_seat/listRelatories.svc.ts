import { IRegisterSeat, IRegisterSeatDate } from "../../interfaces/registerSeat.interface";
import { IRegisterSeatRepository } from "../../repositories/implementations/IRegisterSeatRepository";


class ListRelatoriesService {
  constructor(private registerSeatsRepository: IRegisterSeatRepository){}

  async execute({ filter_date }: IRegisterSeatDate): Promise<IRegisterSeat[]>{
    const relatories = await this.registerSeatsRepository.listRelatories({
      filter_date
    });

    /*
      COLOCAR
      ERRO
      CASO
      NÃO
      ENCONTRE
      RELATORIO
      DA DATA
      FILTRADA
    */

    return relatories;
  }
}


export { ListRelatoriesService };