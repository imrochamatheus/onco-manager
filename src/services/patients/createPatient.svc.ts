import {
  IPatient,
  IPatientCreateReq,
} from "../../interfaces/patient.interface";
import { IPatientRepository } from "../../repositories/implementations/patients";

class CreatePatientSvc {
  constructor(private patientRepository: IPatientRepository) {}

  async execute({
    name,
    medical_records_number,
    contact,
  }: IPatientCreateReq): Promise<IPatient> {
    return await this.patientRepository.createPatient({
      name,
      medical_records_number,
      contact,
    });
  }
}

export { CreatePatientSvc };
