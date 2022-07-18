import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const checkIfProtocolExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = Number(req.params.id);
  const prisma = new PrismaClient();

  try {
    const protocol = await prisma.protocol.findUnique({
      where: {
        id,
      },
    });

    if (!protocol) throw new Error("Protocol not found");

    next();
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({ message: error.message });
    }
  }
};

export default checkIfProtocolExists;
