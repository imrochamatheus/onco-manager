import { NextFunction, Request, Response } from "express";
import { AnyObjectSchema, ValidationError } from "yup";

const schemaValidation =
  (schema: AnyObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedUser = await schema.validate(req.body);

      req.body = validatedUser;
      next();
    } catch (error) {
      if (error instanceof ValidationError)
<<<<<<< HEAD
        return res.status(400).json(error.errors.join(", "));
=======
        return res.json({ message: error.errors.join(", ") });
>>>>>>> main
    }
  };

export default schemaValidation;
