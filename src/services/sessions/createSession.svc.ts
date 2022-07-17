import {ILogin} from "../../interfaces/sessions.interfaces"
import jwt from "jsonwebtoken"
import * as bcrypt from "bcrypt"

import "dotenv/config"
import AppError from "../../errors/AppError"

class CreateSessionService {
    constructor(private professionalRepository: any/*: IProfessionalRepository*/){}

    async execute({email, password}: ILogin): Promise<string> {
        const id = "" //procurar id usando ProfessionalRepository e função findByEmail
        //const professional = await this.professionalRepository.findByEmail(email)
        //const {id, password: professionalPwd} = professional
        const professionalPwd = ""
        const validPassword = await bcrypt.compare(professionalPwd, password)

        if(!validPassword) throw new AppError("Incorrect Email/Password", 401)

        const token = jwt.sign({acess_level: "operator", id, email}, `${process.env.SECRET_KEY}`, {expiresIn: "24h"})
        
        return token
    }

}

export {CreateSessionService}