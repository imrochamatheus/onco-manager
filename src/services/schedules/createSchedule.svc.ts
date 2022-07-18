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
    //verificar disponibilidade de data
    //1 - listar todas os agendamentos do dia
    //2 - horario marcado + tempo de protocolo + 15 min
    ///2.1: if

    return await this.scheduleRepository.createSchedule({
      id_patient,
      id_protocol,
      cicle_number,
      date,
    });
  }
}

export { CreateScheduleSvc };
