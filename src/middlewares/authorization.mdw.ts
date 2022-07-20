import { Access } from "@prisma/client";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { prisma } from "../client";

interface jwtPayload {
  id: string;
  email: string;
  access_level: Access;
  full_name: string;
}

const authorizarionMiddleware =
  (access: Access[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = { ...req.headers };

    if (!authorization)
      return res.status(401).json({ message: "Missing authorization headers" });

    const token = authorization ? authorization.split(" ")[1] : "";
    const { access_level, id, full_name } = jwt.verify(
      token,
      `${process.env.SECRET_KEY}`
    ) as jwtPayload;

    req.full_name = full_name;

    const professionalStillExists = prisma.professionals.findUniqueOrThrow({
      where: { id },
    });

    if (!professionalStillExists || !access.includes(access_level))
      return res.status(401).json({ message: "Unauthorized access" });

    next();
  };

export default authorizarionMiddleware;
