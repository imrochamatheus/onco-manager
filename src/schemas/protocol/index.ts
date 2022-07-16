import * as yup from "yup";

const protocolSchema = yup
  .object()
  .shape({
    name: yup.string().required(),
    volume: yup.number().required(),
    infusion_time: yup.string(),
    description: yup
      .string()
      .required()
      .max(255, "Must be a maximum of 255 characters"),
  })
  .strict()
  .noUnknown(true, "Enter only valid keys");

const protocolPatchSchema = yup
  .object({
    name: yup.string(),
    volume: yup.number(),
    infusion_time: yup.string(),
    description: yup.string().max(255, "Must be a maximum of 255 characters"),
  })
  .strict()
  .noUnknown(true, "Enter only valid keys");

export { protocolSchema, protocolPatchSchema };
