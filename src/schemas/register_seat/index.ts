import * as yup from "yup";

const registerSeatPatchSchema = yup
  .object({
    notes: yup.string().max(255, "Must be a maximum of 255 characters"),
    checkout_professional: yup
      .string()
      .max(255, "Must be a maximum of 255 characters"),
  })
  .strict()
  .noUnknown(true, "Enter only valid keys");

export default registerSeatPatchSchema;
