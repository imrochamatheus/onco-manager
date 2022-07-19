import { NextFunction, Request, Response } from "express";
import { AnyObjectSchema, ValidationError } from "yup";

const schemaValidation =
  (schema: AnyObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedUser = await schema.validate(req.body, {
        strict: true,
        abortEarly: false,
        stripUnknown: true,
      });

      req.body = validatedUser;
      next();
    } catch (error) {
      if (error instanceof ValidationError)
        return res.status(400).json({ message: error.errors.join(", ") });
    }
  };

export default schemaValidation;
