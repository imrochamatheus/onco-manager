// import { ISeatCreate } from "../../interfaces/seats.interfaces";
// import { PrismaClient } from "@prisma/client";
// import { IProfessional } from "../../interfaces/professionals.interface";
// import request from "supertest";
// import bcrypt from "bcrypt";
// import app from "../..";

// const prisma = new PrismaClient();

// let professional: IProfessional;

// describe("Login tests", function () {
//   beforeAll(async () => {
//     await prisma.$connect();

//     professional = await prisma.professionals.create({
//       data: {
//         full_name: "Silvia",
//         password: bcrypt.hashSync("12345678", 10),
//         occupation: "manager",
//         access_level: "master",
//         email: "admin@admin.com",
//         cartao_nacional_saude: "400489221254879",
//       },
//     });
//   });

//   afterAll(async () => {
//     const deleteProfessional = prisma.professionals.deleteMany();

//     await prisma.$transaction([deleteProfessional]);
//     await prisma.$disconnect();
//   });

//   it("login", async () => {
//     const loginResponse = await request(app).post("/login").send({
//       email: professional.email,
//       password: "12345678",
//     });

//     expect(loginResponse.status).toBe(200);
//     expect(loginResponse.body).toHaveProperty("message");
//     expect(loginResponse.body).toHaveProperty("token");
//   });
// });
