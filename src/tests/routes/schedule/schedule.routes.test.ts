import { PrismaClient } from "@prisma/client";
import request from "supertest";
import app from "../../..";
import bcrypt from "bcrypt";
import { ProfessionalUtils } from "../../utils/professional.util";
import { ScheduleUtils } from "../../utils/schedule.util";
import { ProtocolUtils } from "../../utils/protocols.util";
import { PatientUtils } from "../../utils/patient.util";

let id: number;
let id_patient: string;
let id_protocol: number;

let professionalStaff = ProfessionalUtils.data.staff;
let professionalOperator = ProfessionalUtils.data.operator;

let schedule = ScheduleUtils.data;

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
    schedule.id_patient = id_patient;
    schedule.id_protocol = id_protocol;
  });

  afterAll(async () => {
    await prisma.schedule.deleteMany();
    await prisma.protocol.deleteMany();
    await prisma.seat.deleteMany();
    await prisma.professionals.deleteMany();
    await prisma.patient.deleteMany();
  });

  describe("POST - /schedules", () => {
    it("Should post a schedule", async () => {
      const { email, password } = professionalStaff;

      const login = await request(app).post("/login").send({ email, password });

      const { token } = login.body;

      await prisma.seat.create({
        data: {
          seat_number: 1,
        },
      });

      const resp = await request(app)
        .post("/schedules")
        .send(schedule)
        .set("Authorization", `Bearer ${token}`);

      expect(resp.status).toBe(201);
      expect(resp.body.data).toHaveProperty("id");

      id = resp.body.data.id;
    });

    it("Should not post schedule with unauthorized professional", async () => {
      const { email, password } = professionalOperator;

      const login = await request(app).post("/login").send({ email, password });

      const { token } = login.body;

      const resp = await request(app)
        .post("/schedules")
        .send(schedule)
        .set("Authorization", `Bearer ${token}`);

      expect(resp.status).toBe(401);
      expect(resp.body).toHaveProperty("message");
    });

    it("Should not post schedule without authorization token", async () => {
      const resp = await request(app).post("/schedules").send(schedule);

      expect(resp.status).toBe(401);
      expect(resp.body).toHaveProperty("message");
    });

    it("Should not post schedule without availabe seats", async () => {
      const { email, password } = professionalStaff;

      const login = await request(app).post("/login").send({ email, password });

      const { token } = login.body;

      const resp = await request(app)
        .post("/schedules")
        .send(schedule)
        .set("Authorization", `Bearer ${token}`);

      expect(resp.status).toBe(400);
      expect(resp.body).toHaveProperty("message");
    });
  });

  describe("GET - /schedules", () => {
    it("Should list all schedules", async () => {
      const { email, password } = professionalStaff;

      const login = await request(app).post("/login").send({ email, password });

      const { token } = login.body;

      const resp = await request(app)
        .get("/schedules")
        .set("Authorization", `Bearer ${token}`);

      expect(resp.status).toBe(200);
      expect(Array.isArray(resp.body)).toBe(true);
    });

    it("Should not list all schedules with unauthorized professional", async () => {
      const { email, password } = professionalOperator;

      const login = await request(app).post("/login").send({ email, password });

      const { token } = login.body;

      const resp = await request(app)
        .get("/schedules")
        .set("Authorization", `Bearer ${token}`);

      expect(resp.status).toBe(401);
      expect(resp.body).toHaveProperty("message");
    });

    it("Should not list all schedules without authorization token", async () => {
      const resp = await request(app).get("/schedules");
      expect(resp.status).toBe(401);
      expect(resp.body).toHaveProperty("message");
    });
  });

  describe("GET - /schedules/date/:schedule_date", () => {
    it("Should list schedules by date", async () => {
      const { email, password } = professionalStaff;

      const login = await request(app).post("/login").send({ email, password });

      const { token } = login.body;

      const resp = await request(app)
        .get("/schedules/date/2022-03-15")
        .set("Authorization", `Bearer ${token}`);

      expect(resp.status).toBe(200);
      expect(Array.isArray(resp.body)).toBe(true);
      expect(resp.body.length).toBe(1);
    });

    it("Should not list all schedules with unauthorized professional", async () => {
      const { email, password } = professionalOperator;

      const login = await request(app).post("/login").send({ email, password });

      const { token } = login.body;

      const resp = await request(app)
        .get("/schedules/date/2022-07-20")
        .set("Authorization", `Bearer ${token}`);

      expect(resp.status).toBe(401);
      expect(resp.body).toHaveProperty("message");
    });

    it("Should not list all schedules without authorization token", async () => {
      const resp = await request(app).get("/schedules/date/2022-03-15");
      expect(resp.status).toBe(401);
      expect(resp.body).toHaveProperty("message");
    });
  });

  describe("GET - /schedules/:id", () => {
    it("Should get a schedule by using an id", async () => {
      const { email, password } = professionalStaff;

      const login = await request(app).post("/login").send({ email, password });

      const { token } = login.body;

      const res = await request(app)
        .get(`/schedules/${id}`)
        .set("Authorization", `Bearer ${token}`);

      expect(res.status).toBe(200);
      expect(res.body).toEqual(
        expect.objectContaining({
          id: res.body.id,
          id_patient: res.body.id_patient,
          id_protocol: res.body.id_protocol,
        })
      );
    });

    it("Should not get a schedule by using a wrong id", async () => {
      const { email, password } = professionalStaff;

      const login = await request(app).post("/login").send({ email, password });

      const { token } = login.body;

      const res = await request(app)
        .get(`/schedules/${id + 1}`)
        .set("Authorization", `Bearer ${token}`);

      expect(res.status).toBe(404);
      expect(res.body).toHaveProperty("message");
    });
  });

  describe("PATCH - /schedule/:id", () => {
    it("Should update a schedule by id", async () => {
      const { email, password } = professionalStaff;

      const login = await request(app).post("/login").send({ email, password });

      const { token } = login.body;

      const resp = await request(app)
        .patch(`/schedules/${id}`)
        .send({ cicle_number: 7 })
        .set("Authorization", `Bearer ${token}`);

      expect(resp.status).toBe(200);
      expect(resp.body).toHaveProperty("message");
    });

    it("Should not update a schedule with unauthorized professional", async () => {
      const { email, password } = professionalOperator;

      const login = await request(app).post("/login").send({ email, password });

      const { token } = login.body;

      const resp = await request(app)
        .patch(`/schedules/${id}`)
        .send({ cicle_number: 7 })
        .set("Authorization", `Bearer ${token}`);

      expect(resp.status).toBe(401);
      expect(resp.body).toHaveProperty("message");
    });

    it("Should not update a schedule without authorization token", async () => {
      const resp = await request(app)
        .patch(`/schedules/${id}`)
        .send({ cicle_number: 7 });

      expect(resp.status).toBe(401);
      expect(resp.body).toHaveProperty("message");
    });
  });

  describe("DELETE - /schedule/:id", () => {
    it("Should delete a schedule by id", async () => {
      const { email, password } = professionalStaff;

      const login = await request(app).post("/login").send({ email, password });

      const { token } = login.body;

      await prisma.schedule.create({
        data: {
          id_patient,
          id_protocol,
          cicle_number: 10,
          date: "2022-07-20T08:00:10.000Z",
        },
      });

      const getSchedule = await prisma.schedule.findFirst({
        where: {
          date: "2022-07-20T08:00:10.000Z",
        },
      });

      const resp = await request(app)
        .delete(`/schedules/${getSchedule!.id}`)
        .set("Authorization", `Bearer ${token}`);

      expect(resp.status).toBe(200);
      expect(resp.body).toHaveProperty("message");
    });
  });

  describe("DELETE - /schedule/:id", () => {
    it("Should not delete a schedule by id without authorization token", async () => {
      await prisma.schedule.create({
        data: {
          id_patient,
          id_protocol,
          cicle_number: 10,
          date: "2022-07-20T08:00:10.000Z",
        },
      });

      const getSchedule = await prisma.schedule.findFirst({
        where: {
          date: "2022-07-20T08:00:10.000Z",
        },
      });

      const resp = await request(app).delete(`/schedules/${getSchedule!.id}`);

      expect(resp.status).toBe(401);
      expect(resp.body).toHaveProperty("message");
    });
  });
});
