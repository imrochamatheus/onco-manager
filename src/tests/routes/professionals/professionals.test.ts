import { PrismaClient } from "@prisma/client";
import request from "supertest";
import app from "../../..";
import { ProfessionalUtils } from "../../utils/professional.util";
import bcrypt from "bcrypt";

let id: number;

let professionalMaster = ProfessionalUtils.data.manager;
let professionalStaff = ProfessionalUtils.data.staff;
let professionalOperator = ProfessionalUtils.data.operator;

const prisma = new PrismaClient();

describe("CRUD - /professionals", () => {
  beforeAll(async () => {
    const masterPassword = await bcrypt.hash(professionalMaster.password, 10);

    await prisma.professionals.create({
      data: { ...professionalMaster, password: masterPassword },
    });

    const staffPassword = await bcrypt.hash(professionalStaff.password, 10);

    await prisma.professionals.create({
      data: { ...professionalStaff, password: staffPassword },
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
  });

  describe("POST - /professionals", () => {
    it("should create a new professional", async () => {
      const { email, password } = professionalMaster;

      const login = await request(app).post("/login").send({ email, password });

      const { token } = login.body;

      const resp = await request(app)
        .post("/professionals")
        .send({
          full_name: "Gabriel Benjamin",
          email: "gabriel@gmail.com",
          password: "12345678",
          access_level: "operator",
          occupation: "nurse",
          cartao_nacional_saude: "400489221297310",
        })
        .set("Authorization", `Bearer ${token}`);

      expect(resp.status).toBe(201);
      expect(resp.body).toHaveProperty("message");
      expect(resp.body.data).toHaveProperty("id");

      id = resp.body.data.id;
    });

    it("should not create a professional with unauthorized professional", async () => {
      const { email, password } = professionalStaff;

      const login = await request(app).post("/login").send({ email, password });

      const { token } = login.body;

      const resp = await request(app)
        .post("/professionals")
        .send({
          full_name: "Gabriel Benjamin",
          email: "gabriel@gmail.com",
          password: "12345678",
          access_level: "operator",
          occupation: "nurse",
          cartao_nacional_saude: "400489221297310",
        })
        .set("Authorization", `Bearer ${token}`);

      expect(resp.status).toBe(401);
      expect(resp.body).toHaveProperty("message");
    });

    it("should not create a professional without authorization token", async () => {
      const resp = await request(app).post("/professionals").send({
        full_name: "Gabriel Benjamin",
        email: "gabriel@gmail.com",
        password: "12345678",
        access_level: "operator",
        occupation: "nurse",
        cartao_nacional_saude: "400489221297310",
      });

      expect(resp.status).toBe(401);
      expect(resp.body).toHaveProperty("message");
    });
  });

  describe("GET - /professionals", () => {
    it("should list all professionals", async () => {
      const { email, password } = professionalMaster;

      const login = await request(app).post("/login").send({ email, password });

      const { token } = login.body;

      const resp = await request(app)
        .get("/professionals")
        .set("Authorization", `Bearer ${token}`);

      expect(resp.status).toBe(200);
      expect(Array.isArray(resp.body)).toBe(true);
    });

    it("should not list professionals with unauthorized professional", async () => {
      const { email, password } = professionalOperator;

      const login = await request(app).post("/login").send({ email, password });

      const { token } = login.body;

      const resp = await request(app)
        .get("/professionals")
        .set("Authorization", `Bearer ${token}`);

      expect(resp.status).toBe(401);
      expect(resp.body).toHaveProperty("message");
    });

    it("should not list professionals without authorization token", async () => {
      const resp = await request(app).get("/professionals");

      expect(resp.status).toBe(401);
      expect(resp.body).toHaveProperty("message");
    });
  });

  describe("GET - /professionals/:id", () => {
    it("should list professional by id", async () => {
      const { email, password } = professionalMaster;

      const login = await request(app).post("/login").send({ email, password });

      const { token } = login.body;

      const resp = await request(app)
        .get(`/professionals/${id}`)
        .set("Authorization", `Bearer ${token}`);

      expect(resp.status).toBe(200);
      expect(resp.body).toHaveProperty("full_name");
      expect(resp.body).toHaveProperty("email");
      expect(resp.body).toHaveProperty("occupation");
      expect(resp.body).toHaveProperty("id");
      expect(resp.body).toHaveProperty("access_level");
      expect(resp.body).toHaveProperty("cartao_nacional_saude");
      expect(resp.body).toHaveProperty("password");
    });

    it("should not list professionals with unauthorized professional", async () => {
      const { email, password } = professionalOperator;

      const login = await request(app).post("/login").send({ email, password });

      const { token } = login.body;

      const resp = await request(app)
        .get(`/professionals/${id}`)
        .set("Authorization", `Bearer ${token}`);

      expect(resp.status).toBe(401);
      expect(resp.body).toHaveProperty("message");
    });

    it("should not list professionals without authorization token", async () => {
      const resp = await request(app).get(`/professionals/${id}`);

      expect(resp.status).toBe(401);
      expect(resp.body).toHaveProperty("message");
    });
  });

  describe("PATCH - /professionals/:id", () => {
    it("should update the professional", async () => {
      const { email, password } = professionalMaster;

      const login = await request(app).post("/login").send({ email, password });

      const { token } = login.body;

      const resp = await request(app)
        .patch(`/professionals/${id}`)
        .send({ full_name: "Matheus Rocha" })
        .set("Authorization", `Bearer ${token}`);

      expect(resp.status).toBe(200);
      expect(resp.body).toHaveProperty("message");
    });

    it("should not update the professional with unauthorized professional", async () => {
      const { email, password } = professionalStaff;

      const login = await request(app).post("/login").send({ email, password });

      const { token } = login.body;

      const resp = await request(app)
        .patch(`/professionals/${id}`)
        .send({ full_name: "Matheus Rocha" })
        .set("Authorization", `Bearer ${token}`);

      expect(resp.status).toBe(401);
      expect(resp.body).toHaveProperty("message");
    });

    it("should not update the professional without authorization token", async () => {
      const resp = await request(app)
        .patch(`/professionals/${id}`)
        .send({ full_name: "Matheus Rocha" });

      expect(resp.status).toBe(401);
      expect(resp.body).toHaveProperty("message");
    });
  });

  describe("DELETE - /professionals", () => {
    it("should delete a professional", async () => {
      const { email, password } = professionalMaster;

      const login = await request(app).post("/login").send({ email, password });

      const { token } = login.body;

      const resp = await request(app)
        .delete(`/professionals/${id}`)
        .set("Authorization", `Bearer ${token}`);

      expect(resp.status).toBe(200);
    });

    it("should not delete a professional with unauthorized professional", async () => {
      const { email, password } = professionalStaff;

      const login = await request(app).post("/login").send({ email, password });

      const { token } = login.body;

      const resp = await request(app)
        .delete("/professionals/${id}")
        .set("Authorization", `Bearer ${token}`);

      expect(resp.status).toBe(401);
      expect(resp.body).toHaveProperty("message");
    });

    it("should not delete a professional without authorization token", async () => {
      const resp = await request(app).delete(`/professionals/${id}`);

      expect(resp.status).toBe(401);
      expect(resp.body).toHaveProperty("message");
    });
  });
});
