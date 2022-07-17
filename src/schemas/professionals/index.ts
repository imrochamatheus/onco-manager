import * as yup from "yup";

const professionalSchema = yup
  .object()
  .shape({
    full_name: yup
      .string()
      .required()
      .max(255, "Must be a maximum of 255 characters"),
    email: yup.string().email().required(),
    cartao_nacional_saude: yup
      .string()
      .required()
      .max(255, "Must be a maximum of 255 characters"),
    password: yup
      .string()
      .required()
      .min(8, "The password must have 8 characters at least."),
    access_level: yup
      .mixed()
      .required()
      .oneOf(["master", "staff", "operator"])
      .default("operator"),
    occupation: yup
      .mixed()
      .required()
      .oneOf(["manager", "secretary", "nurse", "nursing_technician"]),
  })
  .strict()
  .noUnknown(true, "Please enter only valid keys");

export default professionalSchema;
