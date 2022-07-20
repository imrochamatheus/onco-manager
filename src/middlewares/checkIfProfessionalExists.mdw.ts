import { Request, Response, NextFunction } from "express";
import { prisma } from "../client";

const checkIfProfessionalExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    await prisma.professionals.findUniqueOrThrow({
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

export default checkIfProfessionalExists;
