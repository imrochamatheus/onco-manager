import { Request, Response } from "express";
import { CreateUserService } from "../../services/users/createUser.service";

export class CreateUserController {
  constructor(private createUserService: CreateUserService) {}

  async handle(req: Request, res: Response): Promise<Response | void> {
    const userData = { ...req.body };
    const newUser = await this.createUserService.execute(userData);

    return res.status(201).json(newUser);
  }
}
