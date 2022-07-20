import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { IProfessionalCreate } from "../../../interfaces/professionals.interface";
import { ProfessionalUtils } from "../../utils/professional.util";
import request from "supertest";
import app from "../../..";

describe("POST - /login", () => {
  const prismaClient = new PrismaClient();

  let professional: IProfessionalCreate;

  beforeAll(async () => {
    await prismaClient.$connect();

    professional = ProfessionalUtils.data.manager;

    await prismaClient.professionals.create({
      data: {
        ...professional,
        password: bcrypt.hashSync(professional.password, 10),
      },
    });
  });

  afterAll(async () => {
    const deleteProfessional = prismaClient.professionals.deleteMany();

    await prismaClient.$transaction([deleteProfessional]);

    await prismaClient.$disconnect();
  });

  it("should log a registered user", async () => {
    const loginResponse = await request(app).post("/login").send({
      email: professional.email,
      password: professional.password,
    });

    expect(loginResponse.status).toBe(200);
    expect(loginResponse.body).toHaveProperty("message");
    expect(loginResponse.body).toHaveProperty("token");
  });

  //está retornando um erro 500
  //deveria retornar o mesmo erro que a senha errada?
  it("should fail when trying to log in to an unregistered user", async () => {
    const loginResponse = await request(app).post("/login").send({
      email: "to.fail@email.com",
      password: professional.password,
    });

    expect(loginResponse.status).toBe(401);
    expect(loginResponse.body).toHaveProperty("message");
  });

  it("should fail when trying to log with wrong password", async () => {
    const loginResponse = await request(app).post("/login").send({
      email: professional.email,
      password: "00000000",
    });

    expect(loginResponse.status).toBe(401);
    expect(loginResponse.body).toHaveProperty("message");
  });
});
