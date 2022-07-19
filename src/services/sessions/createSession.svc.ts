import { ILogin } from "../../interfaces/sessions.interfaces";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";

import "dotenv/config";
import AppError from "../../errors/AppError";
import { IProfessionalRepository } from "../../repositories/implementations/professionals/IProfessionalRepository";

class CreateSessionService {
  constructor(private professionalRepository: IProfessionalRepository) {}

  async execute({ email, password }: ILogin): Promise<string> {
    const professional =
      await this.professionalRepository.getProfessionalByEmail(email);

    const id = professional?.id;
    const professionalPwd = professional?.password || "";
    const access_level = professional?.access_level;
    const full_name = professional?.full_name;

    const validPassword = await bcrypt.compare(password, professionalPwd);

    if (!validPassword) throw new AppError("Incorrect Email/Password", 401);

    const token = jwt.sign(
      { access_level, id, email, full_name },
      `${process.env.SECRET_KEY}`,
      { expiresIn: "24h" }
    );

    return token;
  }
}

export { CreateSessionService };
