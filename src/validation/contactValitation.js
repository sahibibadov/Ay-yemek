import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object()
  .shape({
    username: yup.string().required(),
    email: yup.string().email("Invalid email format").required("Mail is required"),
    textarea: yup.string(),
  })
  .required();

export default yupResolver(schema);
