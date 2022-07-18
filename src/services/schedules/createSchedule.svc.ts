import {
  ISchedule,
  IScheduleCreate,
} from "../../interfaces/schedules.interface";
import { IScheduleRepository } from "../../repositories/implementations/schedules/IScheduleRepository";

class CreateScheduleSvc {
  constructor(private scheduleRepository: IScheduleRepository) {}

  async execute({
    id_patient,
    id_protocol,
    cicle_number,
    date,
  }: IScheduleCreate): Promise<ISchedule> {
    const schedules = await this.scheduleRepository.getAllSchedules();

    //verificar se tem cadeiras disponiveis no horário

    //verificar disponibilidade de data
    //1 - listar todas os agendamentos do horario e dia
    //2 - verficar se tem cadeiras livres no horario
    //3 - listar todas as cadeiras
    //4 - verficar se o numero de agendamentos é menor ao numero de cadeiras.
    ///4.1 Se for igual, não há cadeiras disponíveis para aquele horário.
    ///4.2 se for menor, agenda normalmente

    //4.1.1 - pegar o infusion_time do protocolo a ser agendado e acrescentar o tempo de limpeza (15 min)
    //4.1.2 -

    return await this.scheduleRepository.createSchedule({
      id_patient,
      id_protocol,
      cicle_number,
      date,
    });
  }
}

export { CreateScheduleSvc };
