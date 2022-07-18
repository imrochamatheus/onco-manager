import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const checkIfProtocolExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let id = Number(req.params.id);
  const data = req.body;
  const prisma = new PrismaClient();

  if (!id && data.id_protocol) {
    id = data.id_protocol;
  }

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
