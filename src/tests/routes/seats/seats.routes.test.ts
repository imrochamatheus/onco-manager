import { PrismaClient } from "@prisma/client";
import request from "supertest";
import app from "../../..";
import { ProfessionalUtils } from "../../utils/professional.util";
import bcrypt from "bcrypt";
import { prisma } from "../../../client";

let id: number;

let professionalStaff = ProfessionalUtils.data.staff;
let professionalOperator = ProfessionalUtils.data.operator;

describe("CRUD - /seats", () => {
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
  });

  afterAll(async () => {
    await prisma.professionals.deleteMany();
    await prisma.seat.deleteMany();
  });

  describe("POST - /seats", () => {
    it("Should create a seat", async () => {
      const { email, password } = professionalStaff;

      const login = await request(app).post("/login").send({ email, password });

      const { token } = login.body;

      const resp = await request(app)
        .post("/seats")
        .send({
          seat_number: 1,
        })
        .set("Authorization", `Bearer ${token}`);

      expect(resp.status).toBe(201);
      expect(resp.body).toHaveProperty("message");
      expect(resp.body.data).toHaveProperty("id");

      id = resp.body.data.id;
    });

    it("Should not create a seat with unauthorized professional", async () => {
      const { email, password } = professionalOperator;

      const login = await request(app).post("/login").send({ email, password });

      const { token } = login.body;

      const resp = await request(app)
        .post("/seats")
        .send({
          seat_number: 2,
        })
        .set("Authorization", `Bearer ${token}`);

      expect(resp.status).toBe(401);
      expect(resp.body).toHaveProperty("message");
    });

    it("Should not create a seat without authorization token", async () => {
      const resp = await request(app).post("/seats").send({
        seat_number: 3,
      });

      expect(resp.status).toBe(401);
      expect(resp.body).toHaveProperty("message");
    });
  });

  describe("GET - /seats", () => {
    it("Should list all seats", async () => {
      const { email, password } = professionalOperator;

      const login = await request(app).post("/login").send({ email, password });

      const { token } = login.body;

      const resp = await request(app)
        .get("/seats")
        .set("Authorization", `Bearer ${token}`);

      expect(resp.status).toBe(200);
      expect(Array.isArray(resp.body)).toBe(true);
    });

    it("Should not list seats without authorization token", async () => {
      const resp = await request(app).get("/seats");

      expect(resp.status).toBe(401);
      expect(resp.body).toHaveProperty("message");
    });
  });

  describe("DELETE - /seats", () => {
    it("Should delete a seat", async () => {
      const { email, password } = professionalStaff;

      const login = await request(app).post("/login").send({ email, password });

      const { token } = login.body;

      const resp = await request(app)
        .delete(`/seats/${id}`)
        .set("Authorization", `Bearer ${token}`);

      expect(resp.status).toBe(200);
      expect(resp.body).toHaveProperty("message");
    });

    it("Should not delete a seat with unauthorized professional", async () => {
      const { email, password } = professionalOperator;

      const login = await request(app).post("/login").send({ email, password });

      const { token } = login.body;

      const resp = await request(app)
        .delete(`/seats/${id}`)
        .set("Authorization", `Bearer ${token}`);

      expect(resp.status).toBe(401);
      expect(resp.body).toHaveProperty("message");
    });        
    it('Should not delete a seat without authorization token', async () => {
      const resp = await request(app)
        .delete('/seats')
      expect(resp.status).toBe(401);
      expect(resp.body).toHaveProperty("message");
    });
  });
});
