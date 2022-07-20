import { PrismaClient } from "@prisma/client";
import request from "supertest";
import app from "../../..";
import { ProfessionalUtils } from "../../utils/professional.util";
import bcrypt from "bcrypt";
import { ISeatCreate } from "../../../interfaces/seats.interfaces";
import { PatientUtils } from "../../utils/patient.util";
import { IRegisterSeatCreate } from "../../../interfaces/registerSeat.interface";
import { ProtocolUtils } from "../../utils/protocols.util";

let professionalStaff = ProfessionalUtils.data.staff;
let professionalOperator = ProfessionalUtils.data.operator;
let patient = PatientUtils.data.patient1;
let protocol = ProtocolUtils.data.protocol1;
let seat: ISeatCreate = {
  seat_number: 10,
};

const prisma = new PrismaClient();

describe("CRUD - /register_seat", () => {
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

    await prisma.patient.create({
      data: patient,
    });

    await prisma.protocol.create({
      data: protocol,
    });

    await prisma.seat.create({
      data: seat,
    });
  });

  afterAll(async () => {
    await prisma.professionals.deleteMany();
    await prisma.registerSeat.deleteMany();
    await prisma.seat.deleteMany();
    await prisma.patient.deleteMany();
    await prisma.protocol.deleteMany();
  });

  describe("POST - /register_seat", () => {
    it("Should create a register_seat", async () => {
      const { email, password } = professionalStaff;

      const login = await request(app).post("/login").send({ email, password });

      const { token } = login.body;

      const getPatient = await prisma.patient.findFirst({
        where: {
          medical_records_number: patient.medical_records_number,
        },
      });

      const getProtocol = await prisma.protocol.findFirst({
        where: {
          name: protocol.name,
        },
      });

      const getSeat = await prisma.seat.findFirst({
        where: {
          seat_number: seat.seat_number,
        },
      });

      const dataRegisterSeat: IRegisterSeatCreate = {
        id_patient: getPatient!.id,
        id_protocol: getProtocol!.id,
        id_seat: getSeat!.id,
        full_name: professionalOperator.full_name,
      };

      const resp = await request(app)
        .post("/register_seat")
        .send({
          ...dataRegisterSeat,
        })
        .set("Authorization", `Bearer ${token}`);

      expect(resp.status).toBe(201);
      expect(resp.body).toHaveProperty("message");
      expect(resp.body.data).toHaveProperty("id");
      expect(resp.body.data).toHaveProperty("checkin_professional", "Joana");
      expect(resp.body.data).toHaveProperty("checkin_timestamp");
    });
  });

  describe("POST - /register_seat", () => {
    it("Should not create a register_seat without authorization token", async () => {
      const getPatient = await prisma.patient.findFirst({
        where: {
          medical_records_number: patient.medical_records_number,
        },
      });

      const getProtocol = await prisma.protocol.findFirst({
        where: {
          name: protocol.name,
        },
      });

      const getSeat = await prisma.seat.findFirst({
        where: {
          seat_number: seat.seat_number,
        },
      });

      const dataRegisterSeat: IRegisterSeatCreate = {
        id_patient: getPatient!.id,
        id_protocol: getProtocol!.id,
        id_seat: getSeat!.id,
        full_name: professionalOperator.full_name,
      };

      const resp = await request(app)
        .post("/register_seat")
        .send({
          ...dataRegisterSeat,
        });

      expect(resp.status).toBe(401);
      expect(resp.body).toHaveProperty("message");
      expect(resp.body).not.toHaveProperty("data");
    });
  });

  describe("PATCH - /:id_register_seat/checkout", () => {
    it("Should update the register_seat with the checkout", async () => {
      const { email, password } = professionalStaff;

      const login = await request(app).post("/login").send({ email, password });

      const { token } = login.body;

      const getPatient = await prisma.patient.findFirst({
        where: {
          medical_records_number: patient.medical_records_number,
        },
      });

      const getRegisterSeat = await prisma.registerSeat.findFirst({
        where: {
          id_patient: getPatient!.id,
        },
      });

      const resp = await request(app)
        .patch(`/${getRegisterSeat!.id}/checkout`)
        .send({
          notes: "Deu tudo certo",
        })
        .set("Authorization", `Bearer ${token}`);

      expect(resp.status).toBe(200);
      expect(resp.body).toHaveProperty("message");
    });
  });

  describe("PATCH - /:id_register_seat/checkout", () => {
    it("Should not update the register_seat with the checkout without authorization token", async () => {
      const getPatient = await prisma.patient.findFirst({
        where: {
          medical_records_number: patient.medical_records_number,
        },
      });

      const getRegisterSeat = await prisma.registerSeat.findFirst({
        where: {
          id_patient: getPatient!.id,
        },
      });

      const resp = await request(app)
        .patch(`/${getRegisterSeat!.id}/checkout`)
        .send({
          notes: "Deu tudo certo",
        });

      expect(resp.status).toBe(401);
      expect(resp.body).toHaveProperty("message");
    });
  });

  describe("GET - /relatories/:date", () => {
    it("Should list all relatories by date", async () => {
      const { email, password } = professionalOperator;

      const login = await request(app).post("/login").send({ email, password });

      const { token } = login.body;

      const getPatient = await prisma.patient.findFirst({
        where: {
          medical_records_number: patient.medical_records_number,
        },
      });

      const getProtocol = await prisma.protocol.findFirst({
        where: {
          name: protocol.name,
        },
      });

      const getSeat = await prisma.seat.findFirst({
        where: {
          seat_number: seat.seat_number,
        },
      });

      await prisma.registerSeat.create({
        data: {
          id_patient: getPatient!.id,
          id_protocol: getProtocol!.id,
          id_seat: getSeat!.id,
          checkin_timestamp: "1658309400000",
          checkin_professional: professionalStaff.full_name,
          checkout_professional: professionalOperator.full_name,
          checkout_timestamp: "1658313000000",
        },
      });

      const resp = await request(app)
        .get("/relatories/2022-07-20")
        .set("Authorization", `Bearer ${token}`);

      expect(resp.status).toBe(200);
      expect(Array.isArray(resp.body)).toBe(true);
      expect(resp.body[0]).toHaveProperty("checkout_professional", "Pedro");
      expect(resp.body[0].checkout_timestamp).not.toBe(null);
    });
  });

  describe("GET - /relatories/:date", () => {
    it("Should not list all relatories by date without authorization token", async () => {
      const getPatient = await prisma.patient.findFirst({
        where: {
          medical_records_number: patient.medical_records_number,
        },
      });

      const getProtocol = await prisma.protocol.findFirst({
        where: {
          name: protocol.name,
        },
      });

      const getSeat = await prisma.seat.findFirst({
        where: {
          seat_number: seat.seat_number,
        },
      });

      await prisma.registerSeat.create({
        data: {
          id_patient: getPatient!.id,
          id_protocol: getProtocol!.id,
          id_seat: getSeat!.id,
          checkin_timestamp: "1658309400000",
          checkin_professional: professionalStaff.full_name,
          checkout_professional: professionalOperator.full_name,
          checkout_timestamp: "1658313000000",
        },
      });

      const resp = await request(app).get("/relatories/2022-07-20");

      expect(resp.status).toBe(401);
      expect(resp.body).toHaveProperty("message");
    });
  });

  describe("GET - /:patient_id/history", () => {
    it("Should list patient history", async () => {
      const { email, password } = professionalOperator;

      const login = await request(app).post("/login").send({ email, password });

      const { token } = login.body;

      const getPatient = await prisma.patient.findFirst({
        where: {
          medical_records_number: patient.medical_records_number,
        },
      });

      const getProtocol = await prisma.protocol.findFirst({
        where: {
          name: protocol.name,
        },
      });

      const getSeat = await prisma.seat.findFirst({
        where: {
          seat_number: seat.seat_number,
        },
      });

      await prisma.registerSeat.create({
        data: {
          id_patient: getPatient!.id,
          id_protocol: getProtocol!.id,
          id_seat: getSeat!.id,
          checkin_timestamp: "1658309400000",
          checkin_professional: professionalStaff.full_name,
          checkout_professional: professionalOperator.full_name,
          checkout_timestamp: "1658313000000",
          notes: "Está tudo certo",
        },
      });

      const resp = await request(app)
        .get(`/${getPatient!.id}/history`)
        .set("Authorization", `Bearer ${token}`);

      expect(resp.status).toBe(200);
      expect(Array.isArray(resp.body)).toBe(true);
      expect(resp.body).toHaveLength(4);
      expect(resp.body[3]).toHaveProperty("checkin_professional", "Joana");
      expect(resp.body[3]).toHaveProperty("checkout_professional", "Pedro");
      expect(resp.body[3].checkin_timestamp).not.toBe(null);
      expect(resp.body[3].checkout_timestamp).not.toBe(null);
    });
  });

  describe("GET - /:patient_id/history", () => {
    it("Should not list patient history without authorization token", async () => {
      const getPatient = await prisma.patient.findFirst({
        where: {
          medical_records_number: patient.medical_records_number,
        },
      });

      const getProtocol = await prisma.protocol.findFirst({
        where: {
          name: protocol.name,
        },
      });

      const getSeat = await prisma.seat.findFirst({
        where: {
          seat_number: seat.seat_number,
        },
      });

      await prisma.registerSeat.create({
        data: {
          id_patient: getPatient!.id,
          id_protocol: getProtocol!.id,
          id_seat: getSeat!.id,
          checkin_timestamp: "1658309400000",
          checkin_professional: professionalStaff.full_name,
          checkout_professional: professionalOperator.full_name,
          checkout_timestamp: "1658313000000",
          notes: "Está tudo certo",
        },
      });

      const resp = await request(app).get(`/${getPatient!.id}/history`);

      expect(resp.status).toBe(401);
      expect(resp.body).toHaveProperty("message");
    });
  });
});
