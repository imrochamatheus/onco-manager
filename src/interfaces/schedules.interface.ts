import { Moment } from "moment";

export interface IScheduleCreate {
  id_protocol: number;
  id_patient: string;
  cicle_number: number;
  date: Date;
}

export interface ISchedule extends IScheduleCreate {
  id: string;
  final_date?: Moment;
  protocol?: {
    id: number;
    name: string;
    volume: number;
    description: string;
    infusion_time: string;
  };
}

export interface IScheduleByIdReq {
  schedule_id: string;
}

export interface IScheduleByDate {
  schedule_date: string;
}

export interface ISchedulePatch {
  id_protocol: number;
  cicle_number: number;
  date: Date;
}
