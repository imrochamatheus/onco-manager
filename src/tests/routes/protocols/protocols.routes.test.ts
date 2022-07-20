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
  });
});
