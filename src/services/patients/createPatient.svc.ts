import AppError from "../../errors/AppError";
import {
  IPatient,
  IPatientCreateReq,
} from "../../interfaces/patient.interface";
import { IPatientRepository } from "../../repositories/implementations/patients/IPatientRepository";

class CreatePatientSvc {
  constructor(private patientRepository: IPatientRepository) {}

  async execute({
    name,
    medical_records_number,
    contact,
  }: IPatientCreateReq): Promise<IPatient> {
    const patientAlreadyExists =
      await this.patientRepository.getPatientByMedicalRecordsNumber(
        medical_records_number
      );

    if (patientAlreadyExists) throw new AppError("Patient already exists", 400);

    return await this.patientRepository.createPatient({
      name,
      medical_records_number,
      contact,
    });
  }
}

export { CreatePatientSvc };
