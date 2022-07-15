import { IPatient, IPatientByIdReq } from "../../interfaces/patient.interface";
import { IPatientRepository } from "../../repositories/implementations/IPatientRepository";

class GetPatientByIdSvc {
  constructor(private patientRepository: IPatientRepository) {}

  async execute({ patient_id }: IPatientByIdReq): Promise<IPatient | null> {
    return await this.patientRepository.getPatientById({ patient_id });
  }
}

export { GetPatientByIdSvc };
