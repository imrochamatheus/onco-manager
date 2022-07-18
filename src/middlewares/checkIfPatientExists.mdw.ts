import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const checkIfPatientExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { patient_id } = req.params;
  const prisma = new PrismaClient();

  try {
    const protocol = await prisma.patient.findUnique({
      where: {
        id: patient_id,
      },
    });

    if (!protocol) throw new Error("Patient not found");

    next();
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({ message: error.message });
    }
  }
};

export default checkIfPatientExists;
