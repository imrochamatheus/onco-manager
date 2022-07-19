import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

const checkIfPatientExistsMw = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { patient_id } = req.params;
  const data = req.body;
  const prisma = new PrismaClient();

  if (!patient_id && data.id_patient) {
    patient_id = data.id_patient;
  }

  try {
    await prisma.patient.findUniqueOrThrow({
      where: {
        id: patient_id,
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
