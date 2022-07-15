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

  listAllPatients(): Promise<IPatient[]>;

  listPatientById({ patient_id }: IPatientByIdReq): Promise<IPatient | null>;

  patchPatientById(
    { patient_id }: IPatientByIdReq,
    data: IPatientCreateReq
  ): Promise<void>;

  deletePatientById({ patient_id }: IPatientByIdReq): Promise<void>;
}

export { IPatientRepository };