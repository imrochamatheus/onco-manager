export interface IScheduleCreate {
  id_protocol: number;
  id_patient: string;
  cicle_number: number;
  date: Date;
}

export interface ISchedule extends IScheduleCreate {
  id: string;
}

export interface IScheduleByIdReq {
  schedule_id: string;
}

export interface ISchedulePatch {
  id_protocol: number;
  cicle_number: number;
  date: Date;
}
