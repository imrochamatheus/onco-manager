import { PrismaClient } from "@prisma/client";
import { ProtocolUtils } from "../../utils/protocols.util";
import request from "supertest";
import app from "../../..";
import { ProfessionalUtils } from "../../utils/professional.util";
import bcrypt from "bcrypt";

let id: number;

let professionalStaff = ProfessionalUtils.data.staff;
let professionalOperator = ProfessionalUtils.data.operator;

const prisma = new PrismaClient();

describe("CRUD - /protocols", () => {
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
    await prisma.protocol.deleteMany();
  });

  describe("POST - /protocols", () => {
    it("Should create a protocol", async () => {
      const { email, password } = professionalStaff;

      const login = await request(app).post("/login").send({ email, password });

      const { token } = login.body;

      const resp = await request(app)
        .post("/protocols")
        .send(ProtocolUtils.data.protocol1)
        .set("Authorization", `Bearer ${token}`);

      expect(resp.status).toBe(201);
      expect(resp.body).toHaveProperty("message");
      expect(resp.body.data).toHaveProperty("id");

      id = resp.body.data.id;
    });

    it("Should not create a protocol with unauthorized professional", async () => {
      const { email, password } = professionalOperator;

      const login = await request(app).post("/login").send({ email, password });

      const { token } = login.body;

      const resp = await request(app)
        .post("/protocols")
        .send(ProtocolUtils.data.protocol2)
        .set("Authorization", `Bearer ${token}`);

      expect(resp.status).toBe(401);
      expect(resp.body).toHaveProperty("message");
    });

    it("Should not create a protocol without authorization token", async () => {
      const resp = await request(app)
        .post("/protocols")
        .send(ProtocolUtils.data.protocol2);

      expect(resp.status).toBe(401);
      expect(resp.body).toHaveProperty("message");
    });
  });

  describe("GET - /protocols", () => {
    it("Should list all protocols", async () => {
      const { email, password } = professionalOperator;

      const login = await request(app).post("/login").send({ email, password });

      const { token } = login.body;

      const resp = await request(app)
        .get("/protocols")
        .set("Authorization", `Bearer ${token}`);

      expect(resp.status).toBe(200);
      expect(Array.isArray(resp.body)).toBe(true);
    });

    it("Should not list protocols without authorization token", async () => {
      const resp = await request(app).get("/protocols");

      expect(resp.status).toBe(401);
      expect(resp.body).toHaveProperty("message");
    });
  });
  describe("GET - /protocols/:id", () => {
    it("Should get one protocol by id", async () => {
      const { email, password } = professionalOperator;

      const login = await request(app).post("/login").send({ email, password });

      const { token } = login.body;

      const resp = await request(app)
        .get(`/protcols ${id}`)
        .set("Authorization", `Bearer ${token}`);

      expect(resp.status).toBe(200);
      expect(Array.isArray(resp.body)).toBe(true);
    });

    it("Should not get  one protocol without authorization token", async () => {
      const resp = await request(app).get("/protocols");

      expect(resp.status).toBe(401);
      expect(resp.body).toHaveProperty("message");
    });
  });

  describe("PATCH - /protocols/:id", () => {
    it("Should update a protocol", async () => {
      const { email, password } = professionalStaff;

      const login = await request(app).post("/login").send({ email, password });

      const { token } = login.body;

      const resp = await request(app)
        .patch(`/protocols/${id}`)
        .set("Authorization", `Bearer ${token}`);

      expect(resp.status).toBe(200);
      expect(resp.body).toHaveProperty("message");
    });

    it("Should not update a protocol with unauthorized professional", async () => {
      const { email, password } = professionalOperator;

      const login = await request(app).post("/login").send({ email, password });

      const { token } = login.body;

      const resp = await request(app)
        .patch(`/protocols/${id}`)
        .set("Authorization", `Bearer ${token}`);

      expect(resp.status).toBe(401);
      expect(resp.body).toHaveProperty("message");
    });

    it("Should not update a protocol without authorization token", async () => {
      const resp = await request(app).patch(`/protocols/${id}`);

      expect(resp.status).toBe(401);
      expect(resp.body).toHaveProperty("message");
    });
  });
  describe("DELETE - /protocols/:id", () => {
    it("Should delete a protocol", async () => {
      const { email, password } = professionalStaff;

      const login = await request(app).post("/login").send({ email, password });

      const { token } = login.body;

      const resp = await request(app)
        .delete(`/protocols/${id}`)
        .set("Authorization", `Bearer ${token}`);

      expect(resp.status).toBe(200);
      expect(resp.body).toHaveProperty("message");
    });

    it("Should not delete a protocol with unauthorized professional", async () => {
      const { email, password } = professionalOperator;

      const login = await request(app).post("/login").send({ email, password });

      const { token } = login.body;

      const resp = await request(app)
        .delete(`/protocols/${id}`)
        .set("Authorization", `Bearer ${token}`);

      expect(resp.status).toBe(401);
      expect(resp.body).toHaveProperty("message");
    });

    it("Should not delete a protocol without authorization token", async () => {
      const resp = await request(app).delete(`/protocols/${id}`);

      expect(resp.status).toBe(401);
      expect(resp.body).toHaveProperty("message");
    });
  });
});
