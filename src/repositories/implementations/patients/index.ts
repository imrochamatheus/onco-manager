import {
  IPatient,
  IPatientByIdReq,
  IPatientCreateReq,
} from "../../../interfaces/patient.interface";

interface IPatientRepository {
  createPatient({
    name,
    medical_records_number,
    contact,
  }: IPatientCreateReq): Promise<IPatient>;

  listPatient({ patient_id }: IPatientByIdReq): Promise<IPatient>;

  listAllPatients(): Promise<IPatient[]>;

  patchPatientById({ patient_id }: IPatientByIdReq): Promise<void>;

  deletePatientById({ patient_id }: IPatientByIdReq): Promise<void>;
}

export { IPatientRepository };
