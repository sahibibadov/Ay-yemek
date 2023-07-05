import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// phone regex

const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const schema = yup
  .object()
  .shape({
    password: yup
      .string()
      .min(8, "password is too short")
      .required("password is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .matches(emailRegex, "Invalid email format")
      .required("Mail is required"),
  })
  .required();

export default yupResolver(schema);
