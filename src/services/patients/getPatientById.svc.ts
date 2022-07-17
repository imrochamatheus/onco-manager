import AppError from "../../errors/AppError";
import { IPatient, IPatientByIdReq } from "../../interfaces/patient.interface";
import { IPatientRepository } from "../../repositories/implementations/IPatientRepository";

class GetPatientByIdSvc {
  constructor(private patientRepository: IPatientRepository) {}

  async execute({ patient_id }: IPatientByIdReq): Promise<IPatient | null> {
    const patient = await this.patientRepository.getPatientById({ patient_id });

    if (!patient) throw new AppError("This patient does not exist", 404);

    return patient;
  }
}

export { GetPatientByIdSvc };
