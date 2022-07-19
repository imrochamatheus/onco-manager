import * as yup from "yup";

const registerSeatPatchSchema = yup.object().shape({
  notes: yup.string().max(255, "Notes must be a maximum of 255 characters"),
});
// .strict()
// .noUnknown(true, "Enter only valid keys");

export default registerSeatPatchSchema;
