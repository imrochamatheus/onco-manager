import { IPatient } from "../../interfaces/patient.interface";
import { IPatientRepository } from "../../repositories/implementations/patients";

class GetAllPatientsSvc {
  constructor(private patientRepository: IPatientRepository) {}

  async execute(): Promise<IPatient[]> {
    return await this.patientRepository.getAllPatients();
  }
}

export { GetAllPatientsSvc };
