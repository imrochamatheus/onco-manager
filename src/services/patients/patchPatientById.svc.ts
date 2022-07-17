import {
  IPatientByIdReq,
  IPatientPatch,
} from "../../interfaces/patient.interface";
import { IPatientRepository } from "../../repositories/implementations/patients/IPatientRepository";

class PatchPatientByIdSvc {
  constructor(private patientRepository: IPatientRepository) {}

  async execute(
    { patient_id }: IPatientByIdReq,
    data: IPatientPatch
  ): Promise<void> {
    return await this.patientRepository.patchPatientById({ patient_id }, data);
  }
}

export { PatchPatientByIdSvc };
