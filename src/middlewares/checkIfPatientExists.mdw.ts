import { NextFunction, Request, Response } from "express";
import { prisma } from "../client";
const checkIfPatientExistsMw = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { patient_id } = req.params;
  const data = req.body;

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
