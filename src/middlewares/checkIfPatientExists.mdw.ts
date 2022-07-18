import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

const checkIfPatientExistsMw = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { id } = req.params;
  const data = req.body;
  const prisma = new PrismaClient();

  if (!id && data.id_patient) {
    id = data.id_patient;
  }

  try {
    await prisma.patient.findUniqueOrThrow({
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

export default checkIfPatientExistsMw;
