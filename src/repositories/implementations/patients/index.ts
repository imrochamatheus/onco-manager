import { PrismaClient } from "@prisma/client";
import {
  IPatient,
  IPatientByIdReq,
  IPatientCreateReq,
} from "../../../interfaces/patient.interface";
import { IPatientRepository } from "./IPatientRepository";

class PatientRepository implements IPatientRepository {
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
  async getPatientByMedicalRecordsNumber(
    medical_records_number: string
  ): Promise<IPatient | null> {
    const patient = await this.prisma.patient.findUnique({
      where: {
        medical_records_number,
      },
    });

    return patient;
  }

  public async createPatient({
    name,
    medical_records_number,
    contact,
  }: IPatientCreateReq): Promise<IPatient> {
    const newPatient = await this.prisma.patient.create({
      data: {
        name,
        medical_records_number,
        contact,
      },
    });

    return newPatient;
  }

  public async getAllPatients(): Promise<IPatient[]> {
    const allPatients = await this.prisma.patient.findMany();
    return allPatients;
  }

  public async getPatientById({
    patient_id,
  }: IPatientByIdReq): Promise<IPatient | null> {
    const patient = await this.prisma.patient.findUnique({
      where: { id: patient_id },
    });

    return patient;
  }

  public async patchPatientById(
    { patient_id }: IPatientByIdReq,
    data: IPatientCreateReq
  ): Promise<void> {
    await this.prisma.patient.update({
      where: { id: patient_id },
      data: { ...data },
    });
  }

  public async deletePatientById({
    patient_id,
  }: IPatientByIdReq): Promise<void> {
    await this.prisma.patient.delete({ where: { id: patient_id } });
  }
}

export { PatientRepository };
