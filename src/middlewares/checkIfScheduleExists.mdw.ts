import { NextFunction, Request, Response } from "express";
import { prisma } from "../client";

const checkIfScheduleExistsMw = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { id } = req.params;

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
