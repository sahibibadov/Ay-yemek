import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// phone regex
const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const schema = yup
  .object()
  .shape({
    name: yup.string().required("name is required"),
    surname: yup.string().required("surname is required"),
    password: yup
      .string()
      .min(8, "password is too short")
      .required("password is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .matches(emailRegex, "Invalid email format")
      .required("Mail is required"),
    // date: yup.date("date is required").required("date is required"),
    // /*  firstName: yup.string().notRequired(), //notRequired yerine nullable(),optional() yazila biler.eyni seydiler */
    // phoneNumber: yup
    //   .string()
    //   .matches(phoneRegExp, "Phone number is not valid")
    //   .required(),
    // location: yup.string().required("location is required"),
  })
  .required();

export default yupResolver(schema);
