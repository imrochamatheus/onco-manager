import * as yup from "yup";

const protocolSchema = yup.object().shape({
  name: yup.string().required(),
  volume: yup.number().required(),
  infusion: yup.string(),
  description: yup
    .string()
    .required()
    .max(255, "Must be a maximum of 255 characters"),
});

export default protocolSchema;
