import {
  Access,
  IProfessionalCreate,
  Occupation,
} from "../../interfaces/professionals.interface";

import { ProfessionalRepository } from "../../repositories/implementations/professionals";
import { CreateProfessionalService } from "../../services/professionals/createProfessional.svc";
import { IProfessionalRepository } from "../../repositories/implementations/professionals/IProfessionalRepository";
import { CreateSessionService } from "../../services/sessions/createSession.svc";
import { ILogin } from "../../interfaces/sessions.interfaces";

export class ProfessionalUtils {
  private static professionalsRepo: IProfessionalRepository =
    new ProfessionalRepository();

  private static createProfessionalSvc = new CreateProfessionalService(
    ProfessionalUtils.professionalsRepo
  );

  private static createSessionSvc = new CreateSessionService(
    ProfessionalUtils.professionalsRepo
  );

  static data = {
    manager: {
      full_name: "Silvia",
      password: "12345678",
      occupation: Occupation.manager,
      access_level: Access.master,
      email: "master@mail.com",
      cartao_nacional_saude: "400489221254800",
    },
    staff: {
      full_name: "Joana",
      password: "12345678",
      occupation: Occupation.secretary,
      access_level: Access.staff,
      email: "staff@mail.com",
      cartao_nacional_saude: "400489221254810",
    },
    operator: {
      full_name: "Pedro",
      password: "12345678",
      occupation: Occupation.nurse,
      access_level: Access.operator,
      email: "operator@mail.com",
      cartao_nacional_saude: "400489221254820",
    },
  };

  static async createProfissional(data: IProfessionalCreate): Promise<void> {
    ProfessionalUtils.createProfessionalSvc.execute(data);
  }

  static async getToken(credentials: ILogin): Promise<string> {
    const token = ProfessionalUtils.createSessionSvc.execute({
      email: credentials.email,
      password: credentials.password,
    });
    return token;
  }
}
