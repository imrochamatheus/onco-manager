import {
  ISchedule,
  IScheduleCreate,
} from "../../interfaces/schedules.interface";
import { IScheduleRepository } from "../../repositories/implementations/schedules/IScheduleRepository";

import moment from "moment";
import { SeatsRepository } from "../../repositories/implementations/seats";
import AppError from "../../errors/AppError";
class CreateScheduleSvc {
  constructor(private scheduleRepository: IScheduleRepository) {}

  async execute({
    id_patient,
    id_protocol,
    cicle_number,
    date,
  }: IScheduleCreate): Promise<ISchedule> {
    const schedule_date = new Date(date).toISOString().substring(0, 10);

    const seatRepo = new SeatsRepository();
    const allSeats = await seatRepo.listAllSeats();

    const schedulesOnDate = await this.scheduleRepository.getScheduleByDate({
      schedule_date,
    });

    const newSchedules = schedulesOnDate?.map((item) => {
      const minimun_time = parseInt(item.protocol!.infusion_time) + 15;

      item.final_date = moment(new Date(item.date))
        .add(minimun_time, "m")
        .add(3, "h");
      return item;
    });

    const currentDate = moment(new Date(date)).add(3, "h");
    let counter = 0;

    newSchedules?.forEach((schedule) => {
      const scheduleFinalDate = schedule.final_date;

      if (currentDate.diff(scheduleFinalDate) <= 0) {
        counter++;
      }
    });

    if (allSeats.length <= counter) {
      throw new AppError("No seats available", 400);
    }
    //comparar os horários das schedules e verificar se tem alguma em conflito com a atual

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
