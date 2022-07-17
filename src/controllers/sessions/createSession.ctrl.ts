import { NextFunction, Request, Response } from "express";
import { CreateSessionService } from "../../services/sessions/createSession.svc";

class CreateSessionController {
  constructor(private createSessionService: CreateSessionService) {}

  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const loginData = { ...req.body };

    try {
      const token = await this.createSessionService.execute(loginData);

      return res.status(200).json({
        message: "Logged in Successfully",
        token,
      });
    } catch (error) {
      next(error);
    }
  }
}

export { CreateSessionController };
