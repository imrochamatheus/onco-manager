import { Request, Response, NextFunction } from "express";

interface IController {
  handle: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<Response | void>;
}

export { IController };
