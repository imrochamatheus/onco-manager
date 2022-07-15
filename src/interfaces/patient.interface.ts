export interface IPatientCreateReq {
  name: string;
  medical_records_number: number;
  contact: string;
}

export interface IPatient extends IPatientCreateReq {
  id: string;
}

export interface IPatientByIdReq {
  patient_id: string;
}

export interface IPatientPatch {
  name?: string;
  contact?: string;
}
