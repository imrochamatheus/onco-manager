import { IPatientByIdReq } from "../../interfaces/patient.interface";
import { IPatientRepository } from "../../repositories/implementations/IPatientRepository";

class DeletePatientByIdSvc {
  constructor(private patientRepository: IPatientRepository) {}

  async execute({ patient_id }: IPatientByIdReq): Promise<void> {
    return await this.patientRepository.deletePatientById({ patient_id });
  }
}

export { DeletePatientByIdSvc };
