// import { PrismaClient } from "@prisma/client";
// import request from "supertest";
// import app from "../../..";
// import { IProfessionalCreate } from "../../../interfaces/professionals.interface";
// import { PatientUtils } from "../../utils/patient.util";
// import { ProfessionalUtils } from "../../utils/professional.util";

// describe("POST - /patients", () => {
//   const prismaClient = new PrismaClient();

//   // let professionalManager: IProfessionalCreate;
//   let professionalStaff: IProfessionalCreate;
//   let professionalOperator: IProfessionalCreate;

//   // let managerToken: string;
//   let staffToken: string;
//   let operatorToken: string;

//   beforeAll(async () => {
//     await prismaClient.$connect();

//     // professionalManager = ProfessionalUtils.data.manager;
//     professionalStaff = ProfessionalUtils.data.staff;
//     professionalOperator = ProfessionalUtils.data.operator;

//     // await ProfessionalUtils.createProfissional(professionalManager);
//     await ProfessionalUtils.createProfissional(professionalStaff);
//     await ProfessionalUtils.createProfissional(professionalOperator);

//     // managerToken = await ProfessionalUtils.getToken({
//     //   email: professionalManager.email,
//     //   password: professionalManager.password,
//     // });

//     staffToken = await ProfessionalUtils.getToken({
//       email: professionalStaff.email,
//       password: professionalStaff.password,
//     });

//     operatorToken = await ProfessionalUtils.getToken({
//       email: professionalOperator.email,
//       password: professionalOperator.password,
//     });
//   });

//   afterAll(async () => {
//     // const deleteSchedules = prismaClient.schedule.deleteMany();
//     const deletePatients = prismaClient.patient.deleteMany();
//     const deleteProfessionals = prismaClient.professionals.deleteMany();

//     await prismaClient.$transaction([
//       // deleteSchedules,
//       deletePatients,
//       deleteProfessionals,
//     ]);

//     await prismaClient.$disconnect();
//   });

//   it("should register a patient if all data is valid and user has authorization", async () => {
//     const patient = PatientUtils.data.patient1;

//     const createRes = await request(app)
//       .post("/patients")
//       .send(patient)
//       .auth(staffToken, { type: "bearer" });

//     console.log(createRes.body);

//     expect(createRes.status).toBe(201);
//     expect(createRes.body.data).toEqual(
//       expect.objectContaining({
//         id: createRes.body.data.id,
//         name: patient.name,
//         medical_records_number: patient.medical_records_number,
//         contact: patient.contact,
//       })
//     );
//   });
// });
