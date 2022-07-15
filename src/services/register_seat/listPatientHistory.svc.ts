import { IPatientByIdReq } from "../../interfaces/patient.interface";
import { IRegisterSeat } from "../../interfaces/registerSeat.interface";
import { IRegisterSeatRepository } from "../../repositories/implementations/IRegisterSeatRepository";


class ListPatientHistoryService {
  constructor(private registerSeatRepository: IRegisterSeatRepository) {}

  async execute({
    patient_id
  }: IPatientByIdReq): Promise<IRegisterSeat[]>{

    const history = this.registerSeatRepository.listPatientHistory({
      patient_id
    });

    /*
      COLOCAR
      ERRO
      CASO
      NÃO
      ENCONTRE
      PACIENTE
      OU
      HISTÓRICO
    */

    return history;
  }
}

export { ListPatientHistoryService };
