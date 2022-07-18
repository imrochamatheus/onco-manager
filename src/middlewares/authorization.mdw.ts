import { Access } from "@prisma/client";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

interface jwtPayload {
  id: string;
  email: string;
  access_level: Access;
}

const authorizarionMiddleware =
  (access: Access[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;

    if (!authorization)
      return res.status(401).json({ message: "Missing authorization headers" });

    const token = authorization ? authorization.split(" ")[1] : "";
    const { access_level, id } = jwt.verify(
      token,
      `${process.env.SECRET_KEY}`
    ) as jwtPayload;

    const prisma = new PrismaClient();
    const professionalStillExists = prisma.professionals.findUnique({
      where: { id },
    });

    if (!professionalStillExists || !access.includes(access_level))
      return res.status(401).json({ message: "Unauthorized access" });

    next();
  };

export default authorizarionMiddleware;
