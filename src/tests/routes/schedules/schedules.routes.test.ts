import { PrismaClient } from "@prisma/client";
import request from "supertest";
import app from "../../..";
import { ProfessionalUtils } from "../../utils/professional.util";
import bcrypt from "bcrypt";

let id: number;
let id_patient: string;
let id_protocol: number;

let professionalStaff = ProfessionalUtils.data.staff;
let professionalOperator = ProfessionalUtils.data.operator;

const prisma = new PrismaClient();

describe("CRUD - /schedules", () => {
  beforeAll(async () => {
    const professionalPassword = await bcrypt.hash(
      professionalStaff.password,
      10
    );

    await prisma.professionals.create({
      data: { ...professionalStaff, password: professionalPassword },
    });

    const operatorPassword = await bcrypt.hash(
      professionalOperator.password,
      10
    );

    await prisma.professionals.create({
      data: { ...professionalOperator, password: operatorPassword },
    });

    const protocol = await prisma.protocol.create({
      data: {
        name: "ProtocolIASG",
        volume: 1.256,
        description: "lorem ipsum",
        infusion_time: "127min",
      },
    });

    id_protocol = protocol.id;

    const patient = await prisma.patient.create({
      data: {
        name: "Táfnis",
        medical_records_number: "45523959865",
        contact: "71988119884",
      },
    });

    id_patient = patient.id;
  });

  afterAll(async () => {
    await prisma.professionals.deleteMany();
    await prisma.patient.deleteMany();
    await prisma.protocol.deleteMany();
    await prisma.schedule.deleteMany();
  });
});
