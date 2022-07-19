import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

const checkIfScheduleExistsMw = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { id } = req.params;
  const prisma = new PrismaClient();

  try {
    await prisma.schedule.findUniqueOrThrow({
      where: {
        id,
      },
    });

    next();
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({ message: error.message });
    }
  }
};

export default checkIfScheduleExistsMw;
