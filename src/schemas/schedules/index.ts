import * as yup from "yup";

export const scheduleCreateSchema = yup.object({
  id_protocol: yup.number().required(),
  id_patient: yup.string().required(),
  cicle_number: yup
    .number()
    .required()
    .lessThan(100000, "Cicle number must be less than 100000"),
  date: yup.string().required(),
});
// .strip()
// .noUnknown(true, "Please enter only valid keys");

export const schedulePatchSchema = yup.object().shape({
  id_protocol: yup.number(),
  cicle_number: yup.number(),
  date: yup.date(),
});
// .strict()
// .noUnknown(true, "Please enter only valid keys");
