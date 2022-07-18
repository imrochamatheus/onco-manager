import * as yup from "yup";

export const scheduleCreateSchema = yup
  .object()
  .shape({
    id_protocol: yup.number().required(),
    id_patient: yup.string().required(),
    cicle_number: yup.number().required(),
    date: yup
      .string()
      .transform((value) => new Date(value))
      .required(),
  })
  .strict()
  .noUnknown(true, "Please enter only valid keys");

export const schedulePatchSchema = yup
  .object()
  .shape({
    id_protocol: yup.number().required(),
    cicle_number: yup.number().required(),
    date: yup.date().required(),
  })
  .strict()
  .noUnknown(true, "Please enter only valid keys");
