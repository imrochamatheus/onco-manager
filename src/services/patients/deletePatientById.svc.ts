import AppError from "../../errors/AppError";
import { IPatientByIdReq } from "../../interfaces/patient.interface";
import { IPatientRepository } from "../../repositories/implementations/patients/IPatientRepository";

class DeletePatientByIdSvc {
  constructor(private patientRepository: IPatientRepository) {}

  async execute({ patient_id }: IPatientByIdReq): Promise<void> {
    const patientExists = await this.patientRepository.getPatientById({
      patient_id,
    });

    if (!patientExists) throw new AppError("This patient does not exist", 404);

    return await this.patientRepository.deletePatientById({ patient_id });
  }
}

export { DeletePatientByIdSvc };
