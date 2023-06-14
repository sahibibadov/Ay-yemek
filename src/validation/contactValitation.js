import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

let EMAIL_REGX = `/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/`;

const schema = yup
  .object()
  .shape({
    username: yup.string().required(),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Mail is required"),
    textarea: yup.string(),
  })
  .required();

export default yupResolver(schema);
